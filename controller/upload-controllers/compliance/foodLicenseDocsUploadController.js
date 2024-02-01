const { foodlicensedocsUpload } = require("../../../utils/upload")
const multiDocs = require("../../../models/upload-models/compliance/farmerRegDocsUploadModel")
exports.addDocController = async (req, res) => {

    try {
        foodlicensedocsUpload(req, res, async (err) => {
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
            if (req.files.proofbusinesspremises) {
                req.body.proofbusinesspremises = `proofbusinesspremises/${req.files.proofbusinesspremises[0].filename}`
            }
            if (req.files.fsmsp) {
                req.body.fsmsp = `fsmsp/${req.files.fsmsp[0].filename}`
            }
            if (req.files.listoffood) {
                req.body.listoffood = ` listoffood/${req.files.listoffood[0].filename}`
            }
            if (req.files.bankinfo) {
                req.body.bankinfo = ` bankinfo/${req.files.bankinfo[0].filename}`
            }
            if (req.files.supportdocs) {
                req.body.supportdocs = ` supportdocs/${req.files.supportdocs[0].filename}`
            }
            if (req.files.formb) {
                req.body.formb = ` formb/${req.files.formb[0].filename}`
            }
            if (req.files.planofprocessing) {
                req.body.planofprocessing = ` planofprocessing/${req.files.planofprocessing[0].filename}`
            }
            if (req.files.listofdirectors) {
                req.body.listofdirectors = ` listofdirectors/${req.files.listofdirectors[0].filename}`
            }
            if (req.files.listofequipment) {
                req.body.listofequipment = ` listofequipment/${req.files.listofequipment[0].filename}`
            }
            if (req.files.authorityletter) {
                req.body.authorityletter = ` authorityletter/${req.files.authorityletter[0].filename}`
            }
            if (req.files.analysisreportofwater) {
                req.body.analysisreportofwater = ` analysisreportofwater/${req.files.analysisreportofwater[0].filename}`
            }
            if (req.files.certobtainundercoopact) {
                req.body.certobtainundercoopact = ` certobtainundercoopact/${req.files.certobtainundercoopact[0].filename}`
            }
            if (req.files.generallicense) {
                req.body.generallicense = ` generallicense/${req.files.generallicense[0].filename}`
            }
            if (req.files.formbduly) {
                req.body.formbduly = ` formbduly/${req.files.formbduly[0].filename}`
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
            if (req.files.ministrytourcert) {
                req.body.ministrytourcert = ` ministrytourcert/${req.files.ministrytourcert[0].filename}`
            }
            if (req.files.supportingdocs) {
                req.body.supportingdocs = ` supportingdocs/${req.files.supportingdocs[0].filename}`
            }
            if (req.files.decform) {
                req.body.decform = ` decform/${req.files.decform[0].filename}`
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