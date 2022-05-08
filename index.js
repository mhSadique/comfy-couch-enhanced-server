const express = require('express');
const cors = require('cors');
const connectDb = require('./db/connectDB');
require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

connectDb();
const Couch = require('./model/Couch');
const routes = require('./routes/index');

app.use(routes);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        success: false,
        message: "Something went wrong"
    })
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})

