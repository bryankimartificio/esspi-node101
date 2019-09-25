const express = require('express');

const app = express();

/* TOPIC 1
app.get('/', (req, res) => res.send('Hello World by ExpressJs GET!'));
app.post('/', (req, res) => res.send('Hello World by ExpressJs POST!'));
app.put('/', (req, res) => res.send('Hello World by ExpressJs PUT!'));
app.delete('/', (req, res) => res.send('Hello World by ExpressJs DELETE!'));
app.patch('/', (req, res) => res.send('Hello World by ExpressJs PATCH!'));

*/
//
//
//
//
//
//
//
//
//
//
//

/* TOPIC 2 - How to access query parameters data

app.get('/v1/consumer/:username', (req, res) => res.send(`Username: ${req.params.username}`));
*/
//
//
//
//
//
//
//
//
//
//
//
//
//
/* TOPIC 3 - getting value from request body 
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // x-www-form-urlencoded 
app.post('/v1/consumer/', (req, res) => res.send(`Username: ${req.body.username}`));
*/
//
//
//
//
//
//
//
//
//
//
//
//
//
/* TOPIC 4 - Responses 
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // x-www-form-urlencoded 
app.post('/v1/consumer/', (req, res) => res.status(200).send(`Username: ${req.body.username}`));
*/
//
//
//
//
//
//
//
//
//
//
//
//
//

/* ---------------ROUTE-----------------*/
require('./application/consumer/consumer.route')(app);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
