const express = require('express');
const router = express.Router();

const selectData = require('../../modules/selectData');

router.get("/", (req, res) => {
    selectData.getBookAll((result) => {
        res.json(result);
    });
});

router.get("/:type", (req, res) => {
    selectData.getBook(req.params.type, (result) => {
        res.json(result);
    });
});

module.exports = router;