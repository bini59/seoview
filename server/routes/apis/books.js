const express = require('express');
const router = express.Router();

const selectData = require('../../modules/selectData');

router.get("/", (req, res) => {
    selectData.getBookAll((result) => {
        res.json(result);
    });
});

router.get("/:type", (req, res) => {
    if (!(req.params.type == "Bestseller" || req.params.type == "ItemNewAll")) {
        res.json({ success : false, msg : "잘못된 접근입니다." });
        return;
    }
    selectData.getBook(req.params.type, (result) => {
        res.json(result);
    });
});

module.exports = router;