const Model = require('./model.js');
const db = require('./db.js')


module.exports = {
    getGoals: (req,res) => {
      Model.Goal.find({}, (err, result) => {
          if (err) return console.error(err);
          res.send(result);
      })
    },
    postGoals: (req, res) => {
      var goal = new Model.Goal(req.body);
      goal.save((err, result) => {
          if (err) return console.error(err);
          res.send('Successfully posted!')
      })
    }, 
    getAllCompanies: (req,res) => {
      Model.Company.find({}, 'name appInfo.title', (err, result) => {
          if (err) return console.error(err);
          res.send(result);
      })
    },
    getSomeCompanies: (req,res) => {
      Model.Company.find({ name: req.query.name }, 'name appInfo.title', (err, result) => {
          if (err) return console.error(err);
          res.send(result);
      })
    },
    getCompanyInfo: (req,res) => {
        Model.Company.find({ name: req.query.name }, (err, result) => {
            if (err) return console.error(err);
            res.send(result);
        })
    },
    postCompanyInfo: (req,res) => {
       var company = new Model.Company(req.body);
       company.save((err, result) => {
         if (err) return console.error(err);
         res.send('Successfully posted!')
       })
    },
    postAppInfo: (req, res) => {
      Model.Company.updateOne({name: req.body.name}, {applied: "true", appInfo: req.body.appInfo}, (err, result) => {
        if (err) return console.error(err);
        res.send('Successfully updated app info!')
      })
    },
    postResponseInfo: (req, res) => {
      Model.Company.updateOne({name: req.body.name}, {response: "true", stageInfo: req.body.stageInfo}, (err, result) => {
        if (err) return console.error(err);
        res.send('Successfully update response info!')
      })
    }
}