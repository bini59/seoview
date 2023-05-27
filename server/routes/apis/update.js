const express = require('express');
const router = express.Router();

const update = require("../../modules/updateData");

router.get("/:type", (req, res) => {
    const type = req.params.type;
    update(type);
    res.send({ result: true, type: type});
})

module.exports = router;