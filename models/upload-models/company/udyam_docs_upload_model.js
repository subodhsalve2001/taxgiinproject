const mongoose = require("mongoose")
const udyamDocsUploadSchema = mongoose.Schema({
    
    adhar: {
        type: String,
        required: true
    },
    pan: {
        type: String,
        required: true
    },
    encorporationcert: {
        type: String,
    },
    gstin: {
        type: String,
    },
    addressproof: {
        type: String,
    },
    bankacc: {
        type: String,
    },
    
})
module.exports = mongoose.model("udyamdocsupload", udyamDocsUploadSchema)