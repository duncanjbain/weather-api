const moment = require('moment');

class DarkySkyApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.latitude = null;
    this.longitude = null;
    this.excludes = null;
    this.lang = null;
    this.units = null;
  }
}

export default DarkySkyApi;
