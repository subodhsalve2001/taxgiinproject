const mongoose = require("mongoose")
module.exports = mongoose.model("multiDoc", mongoose.Schema({
    pancard: String,
    partnershipdeed: String,
    photo: String,
    addressproof: String,
    adhar: String,
    proofofappointment: String,
    llpregcert: String,
    bankacc: String,
}, { timestamps: true }))
