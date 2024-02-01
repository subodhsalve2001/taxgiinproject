const mongoose = require("mongoose")
const foodLicenseDocsUploadSchema = mongoose.Schema({
    photo: String,
    bcc: String,
    proofbusinesspremises: String,
    fsmsp: String,
    listoffood: String,
    bankinfo: String,
    supportdocs: String,
    formb: String,
    planofprocessing: String,
    listofdirectors: String,
    listofequipment: String,
    authorityletter: String,
    analysisreportofwater: String,
    certobtainundercoopact: String,
    generallicense: String,
    formbduly: String,
    sourceofrawmaterial: String,
    recallplan: String,
    ministryofcommercecert: String,
    nocpa: String,
    iecode: String,
    formix: String,
    ministrytourcert: String,
    supportingdocs: String,
    decform: String,
})
module.exports = mongoose.model("foodlicense", foodLicenseDocsUploadSchema)