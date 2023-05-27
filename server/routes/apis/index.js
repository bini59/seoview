const express = require('express');
const router = express.Router();

const update = require("./update");
const books = require("./books");

router.use("/update", update);
router.use("/books", books);

module.exports = router;
