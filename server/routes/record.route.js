const express = require("express");
const { getRecords } = require("../controllers/record.controller");
const router = express.Router();

router.route("/").get(getRecords);

module.exports = router;
