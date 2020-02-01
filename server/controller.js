const Company = require('./model.js');
const db = require('./db.js')


module.exports = {
    getGoals: (req,res) => {
      
    },
    postGoals: (req, res) => {
 
    }, 
    getAllCompanies: (req,res) => {
      Company.find({}, 'name appInfo.title', (err, result) => {
          if (err) return console.error(err);
          res.send(result);
      })
    },
    getCompanyInfo: (req,res) => {
        Company.find({ name: req.query.name }, (err, result) => {
            if (err) return console.error(err);
            res.send(result);
        })
    },
    postCompanyInfo: (req,res) => {
       var company = new Company(req.body);
       company.save((err, result) => {
         if (err) return console.error(err);
         res.send('Successfully posted!')
       })
    }
}