const mongoose = require("mongoose")
const partnershipdeedProductSchema = mongoose.Schema({
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
module.exports = mongoose.model("partnership", partnershipdeedProductSchema)