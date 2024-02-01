const mongoose = require("mongoose")
const gstFilingSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    desc: {
        type: String
    }
})
module.exports = mongoose.model("gstfiling", gstFilingSchema)