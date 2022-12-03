"use strict";

function notfoundhandler(req, res) {
  res.status(404).send("not found");
}

module.exports = notfoundhandler;