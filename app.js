const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbConfig = require('./infrastructure/database.config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* ---------MONGO--------- */

mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successfully connected to the database');
    }).catch((err) => {
        console.log(`Could not connect to the database. Exiting now...${err}`);
        process.exit();
    });
/* ------------------------ */


/* ---------------ROUTE-----------------*/
require('./application/consumer/consumer.route')(app);

// app.listen(3000, () => console.log('Example app listening on port 3000!'));
module.exports = app;
