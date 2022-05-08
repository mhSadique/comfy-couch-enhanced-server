const express = require('express');
const router = express.Router();
const Couch = require('./../model/Couch');

router.get('/couches', async (req, res) => {
    const couches = await Couch.find({});
    res.send(couches);
})

router.get('/ordered-couch-by-id/:id', async (req, res) => {
    const id = req.params.id;
    const couch = await Couch.findById(id);
    res.json(couch);
})

module.exports = router;