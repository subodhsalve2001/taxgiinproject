
const { partnershipdocsUpload } = require("../../../utils/upload")
const multiDocs = require("../../../models/upload-models/company/partnership_docs_upload_model")
exports.addDocController = async (req, res) => {

    try {
        partnershipdocsUpload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "multer err" + err
                })
            }
            if (req.files.addressoffirm) {
                req.body.addressoffirm = `addressoffirm/${req.files.addressoffirm[0].filename}`
            }
            if (req.files.addressofpartner) {
                req.body.addressofpartner = `addressofpartner/${req.files.addressofpartner[0].filename}`
            }
            if (req.files.nature) {
                req.body.nature = `nature/${req.files.nature[0].filename}`
            }
            if (req.files.profitratio) {
                req.body.profitratio = `profitratio/${req.files.profitratio[0].filename}`
            }
            if (req.files.capitalcontribution) {
                req.body.capitalcontribution = ` capitalcontribution/${req.files.capitalcontribution[0].filename}`
            }
            if (req.files.rules) {
                req.body.rules = `rules/${req.files.rules[0].filename}`
            }
            if (req.files.adhar) {
                req.body.adhar = `adhar/${req.files.adhar[0].filename}`
            }
            if (req.files.pan) {
                req.body.pan = `pan/${req.files.pan[0].filename}`
            }
            if (req.files.regcert) {
                req.body.regcert = `regcert/${req.files.regcert[0].filename}`
            }
            if (req.files.partnershipdeed) {
                req.body.partnershipdeed = `partnershipdeed/${req.files.partnershipdeed[0].filename}`
            }
            if (req.files.dec) {
                req.body.dec = `dec/${req.files.dec[0].filename}`
            }
            if (req.files.proofofcapital) {
                req.body.proofofcapital = `proofofcapital/${req.files.proofofcapital[0].filename}`
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