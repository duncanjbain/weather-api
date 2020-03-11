const moment = require('moment');
const queryString = require('query-string');
const fetch = require('node-fetch');

class DarkSkyApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.lat = null;
    this.long = null;
    this.timeValue = null;
    this.query = {};
    this.timeoutValue = 2000;
    this.gzipComp = false;
  }

  static isTruthyOrZero(value) {
    return !!value || parseFloat(value) === 0;
  }

  longitude(long) {
    if (DarkSkyApi.isTruthyOrZero(long)) {
      this.long = long;
    }
    return this;
  }

  latitude(lat) {
    if (DarkSkyApi.isTruthyOrZero(lat)) {
      this.lat = lat;
    }
    return this;
  }

  time(time) {
    if (DarkSkyApi.isTruthyOrZero(time)) {
      this.timeVal = moment(new Date(time)).format('YYYY-MM-DDTHH:mm:ss');
    } else {
      this.timeValue = null;
    }
    return this;
  }

  units(unit) {
    if (unit) {
      this.query.units = unit;
    } else {
      this.query.units = null;
    }
    return this;
  }

  language(lang) {
    if (lang) {
      this.query.lang = lang;
    } else {
      this.query.lang = null;
    }
    return this;
  }

  options(options) {
    // get methods of "this" to invoke later
    const methods = Object.getOwnPropertyNames(
      Object.getPrototypeOf(this)
    ).filter(
      method =>
        method !== 'constructor' &&
        method !== 'get' &&
        method !== 'options' &&
        method !== 'isTruthyOrZero' &&
        method.indexOf('_') === -1
    );
    // get keys of options object passed
    return Object.keys(options).reduce((acc, val) => {
      // ignore methods that do not exist
      if (methods.indexOf(val) > -1) {
        //  invoke setter methods with values of option
        return this[val](options[val]);
      }
    }, this);
  }

  generateRequestUrl() {
    this.url = `https://api.darksky.net/forecast/${this.apiKey}/${this.lat},${this.long}`;
    if (this.query) {
      this.url += `?${queryString.stringify(this.query)}`;
    }
    return true;
  }

  getWeatherData() {
    this.generateRequestUrl();
    fetch(this.url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.data = data;
        console.log(data);
        return this;
      });
  }
}

module.exports = DarkSkyApi;
