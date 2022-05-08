const express = require('express');
const router = express.Router();
const Order = require('./../model/Order');

router.get('/order-by-email/:email', async (req, res) => {
    const userEmail = req.params.email;
    const order = await Order.findOne({ email: userEmail });
    res.json(order);
})

module.exports = router;