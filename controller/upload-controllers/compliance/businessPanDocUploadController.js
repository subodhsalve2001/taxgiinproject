const { businesspandocsUpload } = require("../../../utils/upload")
const multiDocs = require("../../../models/upload-models/compliance/businessPanDocsUploadModel")
exports.addDocController = async (req, res) => {

    try {
        businesspandocsUpload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "multer err" + err
                })
            }
            if (req.files.schooltc) {
                req.body.schooltc = `schooltc/${req.files.schooltc[0].filename}`
            }
            if (req.files.matriccert) {
                req.body.matriccert = `matriccert/${req.files.matriccert[0].filename}`
            }
            if (req.files.degree) {
                req.body.degree = `degree/${req.files.degree[0].filename}`
            }
            if (req.files.dipositoryacc) {
                req.body.dipositoryacc = `dipositoryacc/${req.files.dipositoryacc[0].filename}`
            }
            if (req.files.creditcard) {
                req.body.creditcard = ` creditcard/${req.files.creditcard[0].filename}`
            }
            if (req.files.bankacc) {
                req.body.bankacc = ` bankacc/${req.files.bankacc[0].filename}`
            }
            if (req.files.waterbill) {
                req.body.waterbill = ` waterbill/${req.files.waterbill[0].filename}`
            }
            if (req.files.rationcard) {
                req.body.rationcard = ` rationcard/${req.files.rationcard[0].filename}`
            }
            if (req.files.propertytax) {
                req.body.propertytax = ` propertytax/${req.files.propertytax[0].filename}`
            }
            if (req.files.passport) {
                req.body.passport = ` passport/${req.files.passport[0].filename}`
            }
            if (req.files.voterid) {
                req.body.voterid = ` voterid/${req.files.voterid[0].filename}`
            }
            if (req.files.drivinglicense) {
                req.body.drivinglicense = ` drivinglicense/${req.files.drivinglicense[0].filename}`
            }
            if (req.files.certofid) {
                req.body.certofid = ` certofid/${req.files.certofid[0].filename}`
            }
            if (req.files.electricitybill) {
                req.body.electricitybill = ` electricitybill/${req.files.electricitybill[0].filename}`
            }
            if (req.files.telephonebill) {
                req.body.telephonebill = ` telephonebill/${req.files.telephonebill[0].filename}`
            }
            if (req.files.employercert) {
                req.body.employercert = ` employercert/${req.files.employercert[0].filename}`
            }
            if (req.files.rentreceipt) {
                req.body.rentreceipt = ` rentreceipt/${req.files.rentreceipt[0].filename}`
            }
            if (req.files.affidavit) {
                req.body.affidavit = ` affidavit/${req.files.affidavit[0].filename}`
            }
            if (req.files.any) {
                req.body.any = ` any/${req.files.any[0].filename}`
            }
            if (req.files.incorporationcert) {
                req.body.incorporationcert = ` incorporationcert/${req.files.incorporationcert[0].filename}`
            }
            if (req.files.partnershipdeed) {
                req.body.partnershipdeed = ` partnershipdeed/${req.files.partnershipdeed[0].filename}`
            }
            if (req.files.registrarfirm) {
                req.body.registrarfirm = ` registrarfirm/${req.files.registrarfirm[0].filename}`
            }
            if (req.files.trustdeed) {
                req.body.trustdeed = ` trustdeed/${req.files.trustdeed[0].filename}`
            }
            if (req.files.charity) {
                req.body.charity = ` charity/${req.files.charity[0].filename}`
            }
            if (req.files.charitycert) {
                req.body.charitycert = ` charitycert/${req.files.charitycert[0].filename}`
            }
            if (req.files.centralogvt) {
                req.body.centralogvt = ` centralogvt/${req.files.centralogvt[0].filename}`
            }
            if (req.files.centralogvt) {
                req.body.centralogvt = ` centralogvt/${req.files.centralogvt[0].filename}`
            }

            const result = await multiDocs.create(req.body)

            res.json({
                success: true,
                message: "doc uploaded successfully",
                result
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