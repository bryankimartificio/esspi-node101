const express = require('express');

const app = express();

/* ---------------ROUTE-----------------*/
require('./application/consumer/consumer.route')(app);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
