const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const Controller = require('./controller.js')
const db = require('./db.js');

app.use('/', express.static(path.join(__dirname, '../dist')));

app.get('/getGoals', (req,res) => {
    Controller.getGoals(req, res);
})

app.get('/getCompanyInfo', (req,res) => {
    Controller.getCompanyInfo(req, res);
})

app.listen(port, () => console.log(`JobSeeker listening on port ${port}!`))