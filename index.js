const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const router = require('./routes/userRoute');

app.use(express.json());
app.use('/api/v1', router);

function dbconnect() {
    mongoose.connect(process.env.CONNECTION_STRING)
        .then(() => {
            console.log("Connection");
        })
        .catch((err) => {
            console.log("Failed");
        })
}

app.listen(process.env.PORT, () => {
    dbconnect();
    console.log("Server is ready for Running");
})