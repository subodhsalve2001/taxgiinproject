const mongoose = require("mongoose")
const shopactDocsUploadSchema = mongoose.Schema({
    addreess: {
        type: String,
        required: true
    },
    adhar: {
        type: String,
        required: true
    },
    pan: {
        type: String,
        required: true
    },
    empdetails: {
        type: String,
    },
    businesslicense: {
        type: String,
    },
    
})
module.exports = mongoose.model("shopactdocsupload", shopactDocsUploadSchema)