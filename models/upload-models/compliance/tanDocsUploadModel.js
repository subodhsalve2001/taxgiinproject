const mongoose = require("mongoose")
const tanDocsUploadSchema = mongoose.Schema({
    pan: {
        type: String
    },
    personalinfo: {
        type: String
    },
    incorporation_certificate: {
        type: String
    },
    dsc: {
        type: String
    },
    drp: {
        type: String
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    }
})
module.exports = mongoose.model("tandocsupload", tanDocsUploadSchema)
