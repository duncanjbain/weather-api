const express = require('express');
const helmet = require('helmet');
const routes = require('../api/routes');

const app = express();

app.use('/', routes);

app.use(helmet());

module.exports = app;
