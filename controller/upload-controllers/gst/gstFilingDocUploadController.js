
const { multiDocUpload } = require("../../../utils/upload")
const multiDocs = require("../../../models/upload-models/gst/gstFilingdocsUploadModel")
exports.addDocController = async (req, res) => {

    try {
        multiDocUpload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "multer err" + err
                })
            }
            if (req.files.pancard) {
                req.body.pancard = `pancard/${req.files.pancard[0].filename}`
            }
            if (req.files.partnershipdeed) {
                req.body.partnershipdeed = `partnershipdeed/${req.files.partnershipdeed[0].filename}`
            }
            if (req.files.photo) {
                req.body.photo = `photo/${req.files.photo[0].filename}`
            }
            if (req.files.addressproof) {
                req.body.addressproof = `addressproof/${req.files.addressproof[0].filename}`
            }
            if (req.files.adhar) {
                req.body.adhar = `adhar/${req.files.adhar[0].filename}`
            }
            if (req.files.proofofappointment) {
                req.body.proofofappointment = `proofofappointment/${req.files.proofofappointment[0].filename}`
            }
            if (req.files.llpregcert) {
                req.body.llpregcert = `llpregcert/${req.files.llpregcert[0].filename}`
            }
            if (req.files.bankacc) {
                req.body.bankacc = `bankacc/${req.files.bankacc[0].filename}`
            }
            const result = await multiDocs.create(req.body)

            res.json({
                success: true,
                message: "doc uploaded successfully"
            })
        })
    } catch (error) {
        res.status(400).json({
            success: true,
            message: "error" + error
        })
    }
}

exports.getAlldocsController = async (req, res) => {
    try {
        const result = await multiDocs.find()
        res.json({
            success: true,
            message: "doc fetched successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "error" + error
        })
    }
}
exports.deleteAlldocsController = async (req, res) => {
    try {
        const result = await multiDocs.deleteMany()
        res.json({
            success: true,
            message: "doc deleted successfully",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "error" + error
        })
    }
}