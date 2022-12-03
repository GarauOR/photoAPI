"use strict";

const express = require("express");
require("dotenv").config();
const cors = require('cors');

const homehandler = require('./modules/home');
const notfoundhandler = require('./modules/notFound');
const unsplash = require('./modules/img');

const app = express();
const PORT = process.env.PORT;
app.use(cors());

// endpoints
app.get("/", homehandler);
app.get('/search_image',unsplash.imghandler);
app.get('/random',unsplash.randomhandler);
app.get("*", notfoundhandler);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
