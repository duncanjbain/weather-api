require('dotenv').config()
const express = require('express');
const helmet = require('helmet');
const fetch = require('node-fetch');

const app = express();
app.use(helmet());

app.listen(process.env.PORT, () =>
  console.log(`server started on port ${process.env.PORT}`)
);

app.get('/weather/daily/:latitude,:longitude', async (req, res) => {
  try {
    const { latitude, longitude } = req.params;
    const forecast = await fetch(
      `https://api.darksky.net/forecast/${process.env.DARKSKYAPIKEY}/${latitude},${longitude}?exclude=minutely,hourly&units=uk2`
    );
    const forecastJson = await forecast.json();
    res.json(forecastJson);
  } catch (error) {
    console.log(error);
  }
});

app.get('/weather/hourly/:latitude,:longitude', async (req, res) => {
  try {
    const { latitude, longitude } = req.params;
    const forecast = await fetch(
      `https://api.darksky.net/forecast/${process.env.DARKSKYAPIKEY}/${latitude},${longitude}?exclude=minutely&units=uk2`
    );
    const forecastJson = await forecast.json();
    res.json(forecastJson);
  } catch (error) {
    console.log(error);
  }
});

app.get('/', function(req, res) {
  res.send('Hello World!');
});
