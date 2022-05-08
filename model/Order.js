const mongoose = require('mongoose');
const collectionName = 'comfy_couch_orders';

const OrderSchema = mongoose.Schema({
    productId: String,
    name: String,
    email: String,
    status: String,
    phone: String,
    address: String
});

const model = mongoose.model('Order', OrderSchema, collectionName);

module.exports = model;