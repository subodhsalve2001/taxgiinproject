
const { limitedLiabilityUpload } = require("../../../utils/upload")
const multiDocs = require("../../../models/upload-models/company/limited_liability_docs_upload_model")
exports.addDocController = async (req, res) => {

    try {
        limitedLiabilityUpload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "multer err" + err
                })
            }
            if (req.files.adhar) {
                req.body.adhar = `adhar/${req.files.adhar[0].filename}`
            }
            if (req.files.pan) {
                req.body.pan = `pan/${req.files.pan[0].filename}`
            }
            if (req.files.incorporation) {
                req.body.incorporation = `incorporation/${req.files.incorporation[0].filename}`
            }
            if (req.files.gstin) {
                req.body.gstin = `gstin/${req.files.gstin[0].filename}`
            }
            if (req.files. addressproof) {
                req.body. addressproof = ` addressproof/${req.files. addressproof[0].filename}`
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