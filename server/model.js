const mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
    name: String,
    title: String,
    email: String,
    social: String,
    mode: String,
})

var AppInfoSchema = new mongoose.Schema({
    date: Date,
    title: String,
    duties: String,
    contact: String,
})

var StageInfoSchema = new mongoose.Schema({
    stage1: String,
    stage1Date: Date,
    stage1Notes: String,
    stage2: String,
    stage2Date: Date,
    stage2Notes: String,
    stage3: String,
    stage3Date: Date,
    stage3Notes: String,
    stage4: String,
    stage4Date: Date,
    stage4Notes: String,
    stage5: String,
    stage5Date: Date,
    stage5Notes: String,
    stage6: String,
    stage6Date: Date,
    stage6Notes: String,
})

CompanySchema = new mongoose.Schema({
    name: String,
    about: String,
    url: String,
    contacts:[ContactSchema],
    applied: { type: String, default: 'false' },
    appInfo: AppInfoSchema,
    response: { type: String, default: 'false' },
    stageInfo: StageInfoSchema
})

module.exports = mongoose.model('Company', CompanySchema);
