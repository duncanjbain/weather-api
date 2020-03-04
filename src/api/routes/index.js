const express = require('express');
const GetWeatherRoutes = require('./GetWeather');

const router = express.Router();

router.get('/status', (req, res) => {
  res.send('OK');
});

module.exports = router;
