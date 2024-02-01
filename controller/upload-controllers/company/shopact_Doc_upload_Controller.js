
const { shopactdocsUpload } = require("../../../utils/upload")
const multiDocs = require("../../../models/upload-models/company/shopAct_docs_upload_model")
exports.addDocController = async (req, res) => {

    try {
        shopactdocsUpload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "multer err" + err
                })
            }
            if (req.files.addressoffirm) {
                req.body.addreess = `addreess/${req.files.addreess[0].filename}`
            }
            if (req.files.addressofpartner) {
                req.body.adhar = `adhar/${req.files.adhar[0].filename}`
            }
            if (req.files.nature) {
                req.body.pan = `pan/${req.files.pan[0].filename}`
            }
            if (req.files.profitratio) {
                req.body.empdetails = `empdetails/${req.files.empdetails[0].filename}`
            }
            if (req.files.capitalcontribution) {
                req.body.businesslicense = `businesslicense/${req.files.businesslicense[0].filename}`
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