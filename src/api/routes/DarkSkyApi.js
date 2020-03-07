const moment = require('moment');

class DarkSkyApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.long = null;
    this.lat = null;
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
}
