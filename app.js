const express = require('express');

const app = express();


/* TOPIC 4 - Responses */
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // x-www-form-urlencoded 
app.post('/v1/consumer/', (req, res) => res.status(200).send(`Username: ${req.body.username}`));


app.listen(3000, () => console.log('Example app listening on port 3000!'));
