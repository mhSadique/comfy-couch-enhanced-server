const mongoose = require('mongoose');
const collectionName = 'product_couch';

const CouchSchema = mongoose.Schema({
    name: String,
    img: String,
    price: Number,
    descriptionShort: String,
    dimensions: [String],
    descriptionDetails: [String]
});

const model = mongoose.model('Couch', CouchSchema, collectionName);

module.exports = model;