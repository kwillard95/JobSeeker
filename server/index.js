const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const db = require('./db.js');

app.use('/', express.static(path.join(__dirname, '../dist')));

app.listen(port, () => console.log(`JobSeeker listening on port ${port}!`))