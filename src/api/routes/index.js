const express = require('express');
const DarkSkyApi = require('./DarkSkyApi');

const router = express.Router();

const newApi = new DarkSkyApi(process.env.DARKSKYAPIKEY);

router.get('/status', (req, res) => {
  res.send('OK');
});

router.get('/fetchweather/:latitude,:longitude', async (req, res, next) => {
  try {
    const { latitude, longitude } = req.params;
    const forecast = newApi
      .latitude(latitude)
      .longitude(longitude)
      .getWeatherData();
    console.log(forecast);
    res.status(200).send(forecast);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
