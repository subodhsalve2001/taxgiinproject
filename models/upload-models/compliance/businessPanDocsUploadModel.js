const mongoose = require("mongoose")
const businessPanDocsUploadSchema = mongoose.Schema({
    schooltc: String,
    matriccert: String,
    degree: String,
    dipositoryacc: String,
    creditcard: String,
    bankacc: String,
    waterbill: String,
    rationcard: String,
    propertytax: String,
    passport: String,
    voterid: String,
    drivinglicense: String,
    certofid: String,
    electricitybill: String,
    telephonebill: String,
    employercert: String,
    rentreceipt: String,
    affidavit: String,
    any: String,
    incorporationcert: String,
    partnershipdeed: String,
    registrarfirm: String,
    trustdeed: String,
    charity: String,
    charitycert: String,
    centralogvt: String,
    centralogvt: String,


})
module.exports = mongoose.model("business", businessPanDocsUploadSchema)