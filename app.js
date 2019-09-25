const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/* TOPIC 3 - getting value from request body  */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // x-www-form-urlencoded 
app.post('/v1/consumer/', (req, res) => res.send(`Username: ${req.body.username}`));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
