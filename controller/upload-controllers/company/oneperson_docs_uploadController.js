
const { onepersondocsUpload } = require("../../../utils/upload")
const multiDocs = require("../../../models/upload-models/company/oneperson_docs_upload_model")
exports.addDocController = async (req, res) => {

    try {
        onepersondocsUpload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "multer err" + err
                })
            }
            if (req.files.pancard) {
                req.body.pancard = `pancard/${req.files.pancard[0].filename}`
            }
            if (req.files.panofinterprice) {
                req.body.panofinterprice = `panofinterprice/${req.files.panofinterprice[0].filename}`
            }
            if (req.files.adhar) {
                req.body.adhar = `adhar/${req.files.adhar[0].filename}`
            }
            if (req.files.photo) {
                req.body.photo = `photo/${req.files.photo[0].filename}`
            }
            if (req.files. contactdetails) {
                req.body. contactdetails = ` contactdetails/${req.files. contactdetails[0].filename}`
            }
            if (req.files.rentorbill) {
                req.body.rentorbill = `rentorbill/${req.files.rentorbill[0].filename}`
            }
            if (req.files.dec) {
                req.body.dec = `dec/${req.files.dec[0].filename}`
            }
            if (req.files.inc) {
                req.body.inc = `inc/${req.files.inc[0].filename}`
            }
            if (req.files.noobjcert) {
                req.body.noobjcert = `noobjcert/${req.files.noobjcert[0].filename}`
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