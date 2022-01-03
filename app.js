const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('WELCOME TO K21 ACADEMY PROJECT'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
