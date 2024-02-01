const mongoose = require("mongoose")
const dsProductSchema = mongoose.Schema({
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
module.exports = mongoose.model("ds", dsProductSchema)