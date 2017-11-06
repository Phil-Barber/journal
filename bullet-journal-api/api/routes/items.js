const express = require('express');
const JSONStream = require('JSONStream');
const router = express.Router();

/* GET items */
router.get('/', function(req, res, next) {
    let items = req.db.get('items');
    items.find({}, {}, (err, docs) => {
        if (err) throw err;

        res.json(docs);
    });
});

module.exports = router;
