const mongoose = require("mongoose");
const express = require("express");
const app = express();

exports.options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

exports.middleware1 =app.use(express.json());