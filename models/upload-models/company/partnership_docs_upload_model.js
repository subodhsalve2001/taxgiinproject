const mongoose = require("mongoose")
const partnershipDocsUploadSchema = mongoose.Schema({
    
    addressoffirm: {
        type: String,
        required: true
    },
    addressofpartner: {
        type: String,
        required: true
    },
    nature: {
        type: String,
    },
    profitratio: {
        type: String,
    },
    capitalcontribution: {
        type: String,
    },
    rules: {
        type: String,
    },
    adhar: {
        type: String,
    },
    pan: {
        type: String,
    },
    regcert: {
        type: String,
    },
    partnershipdeed: {
        type: String,
    },
    dec: {
        type: String,
    },
    proofofcapital: {
        type: String,
    },
    
})
module.exports = mongoose.model("partnershipdocsupload", partnershipDocsUploadSchema)