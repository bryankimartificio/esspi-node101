const express = require('express');

const app = express();


/* TOPIC 2 - How to access query parameters data */

app.get('/v1/consumer/:username', (req, res) => res.send(`Username: ${req.params.username}`));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
