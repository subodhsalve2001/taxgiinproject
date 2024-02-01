const mongoose = require("mongoose")
const farmerRegDocsUploadSchema = mongoose.Schema({
    incrporationcert: String,
    panofcompany: String,
    pan: String,
    taxdeduction: String,
    aoa: String,
    electricitybill: String,
    adhars: String,
    bankstatement: String,
    farmercert: String,
    officeaddressproof: String,
    telephonebill: String,
    gasbill: String,
    spicform: String,
    emoa: String,
    eaoa: String,
})
module.exports = mongoose.model("farmerreg", farmerRegDocsUploadSchema)