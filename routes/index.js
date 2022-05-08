const express = require('express');
const router = express.Router();
const couchRouter = require('./couchRouter');
const orderRouter = require('./orderRouter');

router.use(couchRouter);
router.use(orderRouter);

module.exports = router;