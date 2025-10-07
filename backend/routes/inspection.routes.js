const express = require("express");
const router = express.Router();
const { createInspection } = require("../Controlers/inspection.controller.js");





router.post("/inspection", createInspection);

module.exports = router;
