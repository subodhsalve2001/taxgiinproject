<!-- upload -->
exports.multiDocUpload = multer({ storage: multiDocs, limits: { fileSize: "1mb" } }).fields([
    { name: "pancard", maxCount: 1 },
    { name: "partnershipdeed", maxCount: 1 },
    { name: "photo", maxCount: 1 },
    { name: "addressproof", maxCount: 1 },
    { name: "adhar", maxCount: 1 },
    { name: "proofofappointment", maxCount: 1 },
    { name: "llpregcert", maxCount: 1 },
    { name: "bankacc", maxCount: 1 },
])


<!-- model -->

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
