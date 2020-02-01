const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const Controller = require('./controller.js');
const bodyParser = require('body-parser');
const db = require('./db.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(path.join(__dirname, '../dist')));

app.get('/getGoals', (req,res) => {
    Controller.getGoals(req, res);
})
app.post('/postGoals', (req,res) => {
    Controller.postGoals(req, res);
})

app.get('/getAllCompanies', (req, res) => {
    Controller.getAllCompanies(req, res);
})

app.get('/getSomeCompanies', (req, res) => {
    Controller.getSomeCompanies(req, res);
})

app.get('/getCompanyInfo', (req,res) => {
    Controller.getCompanyInfo(req, res);
})

app.post('/postCompanyInfo', (req,res) => {
    Controller.postCompanyInfo(req,res);
})

app.listen(port, () => console.log(`JobSeeker listening on port ${port}!`))