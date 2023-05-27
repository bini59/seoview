const express = require('express');
const router = express.Router();

const update = require("./update");

router.use("/update", update);

module.exports = router;
