const path = require('path');

// import .env variables

require('dotenv').config({
  path: path.join(__dirname, '../../.env'),
  // sample: path.join(__dirname, '../../.env.example'),
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT || 9001,
  DARKSKYAPIKEY: process.env.DARKSKYAPIKEY,
};
