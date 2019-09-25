const express = require('express');

const app = express();

// TOPIC 1 

app.get('/', (req, res) => res.send('Hello World by ExpressJs GET!'));
app.post('/', (req, res) => res.send('Hello World by ExpressJs POST!'));
app.put('/', (req, res) => res.send('Hello World by ExpressJs PUT!'));
app.delete('/', (req, res) => res.send('Hello World by ExpressJs DELETE!'));
app.patch('/', (req, res) => res.send('Hello World by ExpressJs PATCH!'));


app.listen(3000, () => console.log('Example app listening on port 3000!'));
