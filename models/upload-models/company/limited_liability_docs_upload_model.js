const mongoose = require("mongoose")
const limitedliabilityDocsUploadSchema = mongoose.Schema({
    adhar: {
        type: String,
        required: true
    },
    pan: {
        type: String,
        required: true
    },
    incorporation: {
        type: String,
        required: true
    },
    gstin: {
        type: String,
    },
    addressproof: {
        type: String,
        required: true
    },
    bankacc: {
        type: String,
        required: true
    },
   
})
module.exports = mongoose.model("lilmitedliabilitydocsupload", limitedliabilityDocsUploadSchema)