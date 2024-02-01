const mongoose = require("mongoose")
const onePersonDocsUploadSchema = mongoose.Schema({
    pancard: {
        type: String,
        required: true
    },
    panofinterprice: {
        type: String,
        required: true
    },
    adhar: {
        type: String,
        required: true
    },
    photo: {
        type: String,
    },
    contactdetails: {
        type: String,
    },
    rentorbill: {
        type: String,
        required: true
    },
    dec: {
        type: String,
        required: true
    },
    inc: {
        type: String,
        required: true
    },
    noobjcert: {
        type: String,
        required: true
    },
   
})
module.exports = mongoose.model("onepersondocsupload", onePersonDocsUploadSchema)