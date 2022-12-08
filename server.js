"use strict";

const express = require("express");
require("dotenv").config();
const cors = require('cors');
const app = express();

const homehandler = require('./modules/home');
const notfoundhandler = require('./modules/notFound');
const unsplash = require('./modules/img');
const loggerMiddleware = require('./middlewares/logger');
const validate = require('./middlewares/validate');
const errorHandler = require('./handlers/500');
const { get } = require("superagent");


const PORT = process.env.PORT;
app.use(cors());
app.use(loggerMiddleware);

// endpoints
app.get("/", homehandler);
app.get('/search_image',validate, unsplash.imghandler);
app.get('/random',unsplash.randomhandler);
app.get("*", notfoundhandler);

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

module.exports = {
  app: app
};