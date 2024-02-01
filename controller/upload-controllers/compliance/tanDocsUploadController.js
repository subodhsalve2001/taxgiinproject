const { tandocsUpload } = require("../../../utils/upload")
const multiDocs = require("../../../models/upload-models/compliance/tanDocsUploadModel")
exports.addDocController = async (req, res) => {

    try {
        tandocsUpload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "multer err" + err
                })
            }
            if (req.files.pan) {
                req.body.pan = `pan/${req.files.pan[0].filename}`
            }
            if (req.files.personalinfo) {
                req.body.personalinfo = `personalinfo/${req.files.personalinfo[0].filename}`
            }
            if (req.files.incorporation_certificate) {
                req.body.incorporation_certificate = `incorporation_certificate/${req.files.incorporation_certificate[0].filename}`
            }
            if (req.files.dsc) {
                req.body.dsc = `dsc/${req.files.dsc[0].filename}`
            }
            if (req.files. drp) {
                req.body. drp = ` drp/${req.files. drp[0].filename}`
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