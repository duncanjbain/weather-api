const moment = require('moment');

class DarkySkyApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.latitude = null;
    this.longitude = null;
  }
}

export default DarkySkyApi;
