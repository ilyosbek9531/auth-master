const express = require("express");
const AppController = require("../Controllers/App.controller");
const router = express.Router();

router.get("/", AppController.getApps);
module.exports = router;
