const mongoose = require('mongoose');
require('dotenv').config();
const dbUri = process.env.MONGODB_URI_UP;

const connectDb = async () => {
    try {
        await mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true }, () => { console.log('db connected') })
    } catch (err) {
        console.log(err);
    }
};

module.exports = connectDb;