const { trademarkdocsUpload } = require("../../../utils/upload")
const multiDocs = require("../../../models/upload-models/compliance/trademarkDocsUploadModel")
exports.addDocController = async (req, res) => {

    try {
        trademarkdocsUpload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "multer err" + err
                })
            }
            if (req.files.photo) {
                req.body.photo = `photo/${req.files.photo[0].filename}`
            }
            if (req.files.bcc) {
                req.body.bcc = `bcc/${req.files.bcc[0].filename}`
            }
            if (req.files.proofofbusinesspremices) {
                req.body.proofofbusinesspremices = `proofofbusinesspremices/${req.files.proofofbusinesspremices[0].filename}`
            }
            if (req.files.foodsafetyplan) {
                req.body.foodsafetyplan = `foodsafetyplan/${req.files.foodsafetyplan[0].filename}`
            }
            if (req.files.listoffood) {
                req.body.listoffood = ` listoffood/${req.files.listoffood[0].filename}`
            }
            if (req.files.bankinfo) {
                req.body.bankinfo = ` bankinfo/${req.files.bankinfo[0].filename}`
            }
            if (req.files.support) {
                req.body.support = ` support/${req.files.support[0].filename}`
            }
            if (req.files.formb) {
                req.body.formb = ` formb/${req.files.formb[0].filename}`
            }
            if (req.files.planofprocessingunit) {
                req.body.planofprocessingunit = ` planofprocessingunit/${req.files.planofprocessingunit[0].filename}`
            }
            if (req.files.listofdirectors) {
                req.body.listofdirectors = ` listofdirectors/${req.files.listofdirectors[0].filename}`
            }
            if (req.files.equipmentlist) {
                req.body.equipmentlist = ` equipmentlist/${req.files.equipmentlist[0].filename}`
            }
            if (req.files.authorityletter) {
                req.body.authorityletter = ` authorityletter/${req.files.authorityletter[0].filename}`
            }
            if (req.files.waterreport) {
                req.body.waterreport = ` waterreport/${req.files.waterreport[0].filename}`
            }
            if (req.files.coopactcert) {
                req.body.coopactcert = ` coopactcert/${req.files.coopactcert[0].filename}`
            }
            if (req.files.sourceofrawmaterial) {
                req.body.sourceofrawmaterial = ` sourceofrawmaterial/${req.files.sourceofrawmaterial[0].filename}`
            }
            if (req.files.recallplan) {
                req.body.recallplan = ` recallplan/${req.files.recallplan[0].filename}`
            }
            if (req.files.ministryofcommercecert) {
                req.body.ministryofcommercecert = ` ministryofcommercecert/${req.files.ministryofcommercecert[0].filename}`
            }
            if (req.files.nocpa) {
                req.body.nocpa = ` nocpa/${req.files.nocpa[0].filename}`
            }
            if (req.files.iecode) {
                req.body.iecode = ` iecode/${req.files.iecode[0].filename}`
            }
            if (req.files.formix) {
                req.body.formix = ` formix/${req.files.formix[0].filename}`
            }
            if (req.files.tourcert) {
                req.body.tourcert = ` tourcert/${req.files.tourcert[0].filename}`
            }
            if (req.files.supportdocs) {
                req.body.supportdocs = ` supportdocs/${req.files.supportdocs[0].filename}`
            }
            if (req.files.dec) {
                req.body.dec = ` dec/${req.files.dec[0].filename}`
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
