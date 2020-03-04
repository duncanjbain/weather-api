const express = require('express');
const helmet = require('helmet');

const app = express();

// secure api endpoints by setting headers
app.use(helmet());

module.exports = app;
