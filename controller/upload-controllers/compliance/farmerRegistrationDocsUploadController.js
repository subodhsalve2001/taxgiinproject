const { farmerregistrationdocsUpload } = require("../../../utils/upload")
const multiDocs = require("../../../models/upload-models/compliance/farmerRegDocsUploadModel")
exports.addDocController = async (req, res) => {

    try {
        farmerregistrationdocsUpload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "multer err" + err
                })
            }
            if (req.files.incrporationcert) {
                req.body.incrporationcert = `incrporationcert/${req.files.incrporationcert[0].filename}`
            }
            if (req.files.panofcompany) {
                req.body.panofcompany = `panofcompany/${req.files.panofcompany[0].filename}`
            }
            if (req.files.pan) {
                req.body.pan = `pan/${req.files.pan[0].filename}`
            }
            if (req.files.taxdeduction) {
                req.body.taxdeduction = `taxdeduction/${req.files.taxdeduction[0].filename}`
            }
            if (req.files.aoa) {
                req.body.aoa = ` aoa/${req.files.aoa[0].filename}`
            }
            if (req.files.electricitybill) {
                req.body.electricitybill = ` electricitybill/${req.files.electricitybill[0].filename}`
            }
            if (req.files.adhars) {
                req.body.adhars = ` adhars/${req.files.adhars[0].filename}`
            }
            if (req.files.bankstatement) {
                req.body.bankstatement = ` bankstatement/${req.files.bankstatement[0].filename}`
            }
            if (req.files.farmercert) {
                req.body.farmercert = ` farmercert/${req.files.farmercert[0].filename}`
            }
            if (req.files.officeaddressproof) {
                req.body.officeaddressproof = ` officeaddressproof/${req.files.officeaddressproof[0].filename}`
            }
            if (req.files.telephonebill) {
                req.body.telephonebill = ` telephonebill/${req.files.telephonebill[0].filename}`
            }
            if (req.files.gasbill) {
                req.body.gasbill = ` gasbill/${req.files.gasbill[0].filename}`
            }
            if (req.files.spicform) {
                req.body.spicform = ` spicform/${req.files.spicform[0].filename}`
            }
            if (req.files.emoa) {
                req.body.emoa = ` emoa/${req.files.emoa[0].filename}`
            }
            if (req.files.eaoa) {
                req.body.eaoa = ` eaoa/${req.files.eaoa[0].filename}`
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