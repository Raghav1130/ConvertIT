const express = require("express");
const router = express.Router();

const { convertCode } = require("../controllers/convertControllers");

router.post("/", convertCode);

module.exports = router;