const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { v4: uuid } = require("uuid")


// gst-filing
const multiDocs = multer.diskStorage({
    filename: (req, file, cb) => {
        // console.log(req);
        const ext = path.extname(file.originalname)
        const allowedExt = [".png", ".jpg", ".jpeg", ".pdf"]
        if (!allowedExt.includes(ext)) {
            cb("invalid")
        }
        const fn = uuid() + ext
        cb(null, fn)
    },
    destination: (req, file, cb) => {
        // const loc = "public/gallery"
        if (file.fieldname === "pancard") {
            loc = "public/pancard"
        } if (file.fieldname === "partnershipdeed") {
            loc = "public/partnershipdeed"

        } if (file.fieldname === "photo") {
            loc = "public/addressproof"
        } if (file.fieldname === "addressproof") {
            loc = "public/adhar"
        } if (file.fieldname === "adhar") {
            loc = "public/proofofappointment"
        } if (file.fieldname === "proofofappointment") {
            loc = "public/llpregcert"
        } if (file.fieldname === "llpregcert") {
            loc = "public/bankacc"
        } if (file.fieldname === "bankacc") {
            loc = "public/photo"
        }

        fs.mkdirSync(loc, { recursive: true })
        cb(null, loc)
    },
})

// company
const limitedLiability = multer.diskStorage({
    filename: (req, file, cb) => {
        // console.log(req);
        const ext = path.extname(file.originalname)
        const allowedExt = [".png", ".jpg", ".jpeg", ".pdf"]
        if (!allowedExt.includes(ext)) {
            cb("invalid")
        }
        const fn = uuid() + ext
        cb(null, fn)
    },
    destination: (req, file, cb) => {
        // const loc = "public/gallery"
        if (file.fieldname === "adhar") {
            loc = "public/adhar"
        } if (file.fieldname === "pan") {
            loc = "public/pan"

        } if (file.fieldname === "incorporation") {
            loc = "public/incorporation"
        } if (file.fieldname === "gstin") {
            loc = "public/gstin"
        } if (file.fieldname === " addressproof") {
            loc = "public/ addressproof"
        } if (file.fieldname === "bankacc") {
            loc = "public/bankacc"
        }

        fs.mkdirSync(loc, { recursive: true })
        cb(null, loc)
    },
})
const oneperson = multer.diskStorage({
    filename: (req, file, cb) => {
        // console.log(req);
        const ext = path.extname(file.originalname)
        const allowedExt = [".png", ".jpg", ".jpeg", ".pdf"]
        if (!allowedExt.includes(ext)) {
            cb("invalid")
        }
        const fn = uuid() + ext
        cb(null, fn)
    },
    destination: (req, file, cb) => {
        // const loc = "public/gallery"
        if (file.fieldname === "pancard") {
            loc = "public/pancard"
        } if (file.fieldname === "panofinterprice") {
            loc = "public/panofinterprice"

        } if (file.fieldname === "adhar") {
            loc = "public/adharn"
        } if (file.fieldname === "photo") {
            loc = "public/photo"
        } if (file.fieldname === " contactdetails") {
            loc = "public/ contactdetails"
        }
        if (file.fieldname === "rentorbill") {
            loc = "public/rentorbill"
        }
        if (file.fieldname === "dec") {
            loc = "public/dec"
        }
        if (file.fieldname === "inc") {
            loc = "public/inc"
        }
        if (file.fieldname === "noobjcert") {
            loc = "public/noobjcert"
        }


        fs.mkdirSync(loc, { recursive: true })
        cb(null, loc)
    },
})
const partnership = multer.diskStorage({
    filename: (req, file, cb) => {
        // console.log(req);
        const ext = path.extname(file.originalname)
        const allowedExt = [".png", ".jpg", ".jpeg", ".pdf"]
        if (!allowedExt.includes(ext)) {
            cb("invalid")
        }
        const fn = uuid() + ext
        cb(null, fn)
    },
    destination: (req, file, cb) => {
        // const loc = "public/gallery"
        if (file.fieldname === "addressoffirm") {
            loc = "public/addressoffirm"
        } if (file.fieldname === "addressofpartner") {
            loc = "public/addressofpartner"

        } if (file.fieldname === "nature") {
            loc = "public/nature"
        } if (file.fieldname === "profitratio") {
            loc = "public/profitratio"
        } if (file.fieldname === " capitalcontribution") {
            loc = "public/ capitalcontribution"
        }
        if (file.fieldname === "rules") {
            loc = "public/rules"
        }
        if (file.fieldname === "adhar") {
            loc = "public/adhar"
        }
        if (file.fieldname === "pan") {
            loc = "public/pan"
        }
        if (file.fieldname === "regcert") {
            loc = "public/regcert"
        }
        if (file.fieldname === "partnershipdeed") {
            loc = "public/partnershipdeed"
        }
        if (file.fieldname === "dec") {
            loc = "public/dect"
        }
        if (file.fieldname === "proofofcapital") {
            loc = "public/proofofcapital"
        }


        fs.mkdirSync(loc, { recursive: true })
        cb(null, loc)
    },
})
const shopact = multer.diskStorage({
    filename: (req, file, cb) => {
        // console.log(req);
        const ext = path.extname(file.originalname)
        const allowedExt = [".png", ".jpg", ".jpeg", ".pdf"]
        if (!allowedExt.includes(ext)) {
            cb("invalid")
        }
        const fn = uuid() + ext
        cb(null, fn)
    },
    destination: (req, file, cb) => {
        // const loc = "public/gallery"
        if (file.fieldname === "addreess") {
            loc = "public/addreess"
        } if (file.fieldname === "adhar") {
            loc = "public/adhartner"

        } if (file.fieldname === "pan") {
            loc = "public/pan"
        } if (file.fieldname === "empdetails") {
            loc = "public/empdetails"
        }
        if (file.fieldname === "businesslicense") {
            loc = "public/ businesslicense"
        }
        if (file.fieldname === "businesslicense") {
            loc = "public/ businesslicense"
        }



        fs.mkdirSync(loc, { recursive: true })
        cb(null, loc)
    },
})
const udyam = multer.diskStorage({
    filename: (req, file, cb) => {
        // console.log(req);
        const ext = path.extname(file.originalname)
        const allowedExt = [".png", ".jpg", ".jpeg", ".pdf"]
        if (!allowedExt.includes(ext)) {
            cb("invalid")
        }
        const fn = uuid() + ext
        cb(null, fn)
    },
    destination: (req, file, cb) => {
        // const loc = "public/gallery"
        if (file.fieldname === "adhar") {
            loc = "public/adhar"
        } if (file.fieldname === "pan") {
            loc = "public/pan"

        } if (file.fieldname === "encorporationcert") {
            loc = "public/encorporationcert"
        } if (file.fieldname === "gstin") {
            loc = "public/gstin"
        }
        if (file.fieldname === "addressproof") {
            loc = "public/ addressproof"
        }
        if (file.fieldname === "bankacc") {
            loc = "public/ bankacc"
        }



        fs.mkdirSync(loc, { recursive: true })
        cb(null, loc)
    },
})


// compliance
const tan = multer.diskStorage({
    filename: (req, file, cb) => {
        // console.log(req);
        const ext = path.extname(file.originalname)
        const allowedExt = [".png", ".jpg", ".jpeg", ".pdf"]
        if (!allowedExt.includes(ext)) {
            cb("invalid")
        }
        const fn = uuid() + ext
        cb(null, fn)
    },
    destination: (req, file, cb) => {
        // const loc = "public/gallery"
        if (file.fieldname === "pan") {
            loc = "public/pan"
        } if (file.fieldname === "personalinfo") {
            loc = "public/personalinfo"

        } if (file.fieldname === "incorporation_certificate") {
            loc = "public/incorporation_certificate"
        } if (file.fieldname === "dsc") {
            loc = "public/dsc"
        }
        if (file.fieldname === "drp") {
            loc = "public/drp"
        }
        fs.mkdirSync(loc, { recursive: true })
        cb(null, loc)
    },
})

const businesspan = multer.diskStorage({
    filename: (req, file, cb) => {
        // console.log(req);
        const ext = path.extname(file.originalname)
        const allowedExt = [".png", ".jpg", ".jpeg", ".pdf"]
        if (!allowedExt.includes(ext)) {
            cb("invalid")
        }
        const fn = uuid() + ext
        cb(null, fn)
    },
    destination: (req, file, cb) => {
        // const loc = "public/gallery"
        if (file.fieldname === "schooltc") {
            loc = "public/schooltc"
        } if (file.fieldname === "matriccert") {
            loc = "public/matriccert"

        } if (file.fieldname === "degree") {
            loc = "public/degree"
        } if (file.fieldname === "dsc") {
            loc = "public/dsc"
        }
        if (file.fieldname === "dipositoryacc") {
            loc = "public/dipositoryacc"
        }
        if (file.fieldname === "creditcard") {
            loc = "public/creditcard"
        }
        if (file.fieldname === "bankacc") {
            loc = "public/bankacc"
        }
        if (file.fieldname === "waterbill") {
            loc = "public/waterbill"
        }
        if (file.fieldname === "rationcard") {
            loc = "public/rationcard"
        }
        if (file.fieldname === "propertytax") {
            loc = "public/propertytax"
        }
        if (file.fieldname === "passport") {
            loc = "public/passport"
        }
        if (file.fieldname === "voterid") {
            loc = "public/voterid"
        }
        if (file.fieldname === "drivinglicense") {
            loc = "public/drivinglicense"
        }
        if (file.fieldname === "certofid") {
            loc = "public/certofid"
        }
        if (file.fieldname === "electricitybill") {
            loc = "public/electricitybill"
        }
        if (file.fieldname === "telephonebill") {
            loc = "public/telephonebill"
        }
        if (file.fieldname === "employercert") {
            loc = "public/employercert"
        }
        if (file.fieldname === "rentreceipt") {
            loc = "public/rentreceipt"
        }
        if (file.fieldname === "affidavit") {
            loc = "public/affidavit"
        }
        if (file.fieldname === "any") {
            loc = "public/any"
        }
        if (file.fieldname === "incorporationcert") {
            loc = "public/incorporationcert"
        }
        if (file.fieldname === "partnershipdeed") {
            loc = "public/partnershipdeed"
        }
        if (file.fieldname === "registrarfirm") {
            loc = "public/registrarfirm"
        }
        if (file.fieldname === "trustdeed") {
            loc = "public/trustdeed"
        }
        if (file.fieldname === "charity") {
            loc = "public/charity"
        }
        if (file.fieldname === "charitycert") {
            loc = "public/charitycert"
        }
        if (file.fieldname === "centralogvt") {
            loc = "public/centralogvt"
        }
        if (file.fieldname === "centralogvt") {
            loc = "public/centralogvt"
        }
        fs.mkdirSync(loc, { recursive: true })
        cb(null, loc)
    },
})
const farmerreg = multer.diskStorage({
    filename: (req, file, cb) => {
        // console.log(req);
        const ext = path.extname(file.originalname)
        const allowedExt = [".png", ".jpg", ".jpeg", ".pdf"]
        if (!allowedExt.includes(ext)) {
            cb("invalid")
        }
        const fn = uuid() + ext
        cb(null, fn)
    },
    destination: (req, file, cb) => {
        // const loc = "public/gallery"
        if (file.fieldname === "incrporationcert") {
            loc = "public/incrporationcert"
        } if (file.fieldname === "panofcompany") {
            loc = "public/panofcompany"

        } if (file.fieldname === "pan") {
            loc = "public/pan"
        } if (file.fieldname === "dsc") {
            loc = "public/dsc"
        }
        if (file.fieldname === "taxdeduction") {
            loc = "public/taxdeduction"
        }
        if (file.fieldname === "aoa") {
            loc = "public/aoa"
        }
        if (file.fieldname === "electricitybill") {
            loc = "public/electricitybill"
        }
        if (file.fieldname === "adhars") {
            loc = "public/adhars"
        }
        if (file.fieldname === "bankstatement") {
            loc = "public/bankstatement"
        }
        if (file.fieldname === "farmercert") {
            loc = "public/farmercert"
        }
        if (file.fieldname === "officeaddressproof") {
            loc = "public/officeaddressproof"
        }
        if (file.fieldname === "telephonebill") {
            loc = "public/telephonebill"
        }
        if (file.fieldname === "gasbill") {
            loc = "public/gasbill"
        }
        if (file.fieldname === "spicform") {
            loc = "public/spicform"
        }
        if (file.fieldname === "emoa") {
            loc = "public/emoa"
        }
        if (file.fieldname === "eaoa") {
            loc = "public/eaoa"
        }
        fs.mkdirSync(loc, { recursive: true })
        cb(null, loc)
    },
})
const foodLicense = multer.diskStorage({
    filename: (req, file, cb) => {
        // console.log(req);
        const ext = path.extname(file.originalname)
        const allowedExt = [".png", ".jpg", ".jpeg", ".pdf"]
        if (!allowedExt.includes(ext)) {
            cb("invalid")
        }
        const fn = uuid() + ext
        cb(null, fn)
    },
    destination: (req, file, cb) => {
        // const loc = "public/gallery"
        if (file.fieldname === "photo") {
            loc = "public/photo"
        } if (file.fieldname === "bcc") {
            loc = "public/bcc"

        } if (file.fieldname === "proofbusinesspremises") {
            loc = "public/proofbusinesspremises/"
        } if (file.fieldname === "fsmsp") {
            loc = "public/fsmsp"
        }
        if (file.fieldname === "listoffood") {
            loc = "public/listoffood"
        }
        if (file.fieldname === "bankinfo") {
            loc = "public/bankinfo"
        }
        if (file.fieldname === "supportdocs") {
            loc = "public/supportdocs"
        }
        if (file.fieldname === "formb") {
            loc = "public/formb"
        }
        if (file.fieldname === "planofprocessing") {
            loc = "public/planofprocessing"
        }
        if (file.fieldname === "listofdirectors") {
            loc = "public/listofdirectors"
        }
        if (file.fieldname === "listofequipment") {
            loc = "public/listofequipment"
        }
        if (file.fieldname === "authorityletter") {
            loc = "public/authorityletter"
        }
        if (file.fieldname === "analysisreportofwater") {
            loc = "public/analysisreportofwater"
        }
        if (file.fieldname === "certobtainundercoopact") {
            loc = "public/certobtainundercoopact"
        }
        if (file.fieldname === "generallicense") {
            loc = "public/generallicense"
        }
        if (file.fieldname === "formbduly") {
            loc = "public/formbduly"
        }
        if (file.fieldname === "sourceofrawmaterial") {
            loc = "public/sourceofrawmaterial"
        }
        if (file.fieldname === "recallplan") {
            loc = "public/recallplan"
        }
        if (file.fieldname === "ministryofcommercecert") {
            loc = "public/ministryofcommercecert"
        }
        if (file.fieldname === "nocpa") {
            loc = "public/nocpa"
        }
        if (file.fieldname === "iecode") {
            loc = "public/iecode"
        }
        if (file.fieldname === "formix") {
            loc = "public/formix"
        }
        if (file.fieldname === "ministrytourcert") {
            loc = "public/ministrytourcert"
        }
        if (file.fieldname === "supportingdocs") {
            loc = "public/supportingdocs"
        }
        if (file.fieldname === "decform") {
            loc = "public/decform"
        }



        fs.mkdirSync(loc, { recursive: true })
        cb(null, loc)
    },
})
const trademark = multer.diskStorage({
    filename: (req, file, cb) => {
        // console.log(req);
        const ext = path.extname(file.originalname)
        const allowedExt = [".png", ".jpg", ".jpeg", ".pdf"]
        if (!allowedExt.includes(ext)) {
            cb("invalid")
        }
        const fn = uuid() + ext
        cb(null, fn)
    },
    destination: (req, file, cb) => {
        // const loc = "public/gallery"
        if (file.fieldname === "photo") {
            loc = "public/photo"
        }
         if (file.fieldname === "bcc") {
            loc = "public/bcc"
        } 
         if (file.fieldname === "proofofbusinesspremices") {
            loc = "public/proofofbusinesspremices"
        } 
         if (file.fieldname === "foodsafetyplan") {
            loc = "public/foodsafetyplan"
        } 
         if (file.fieldname === "listoffood") {
            loc = "public/listoffood"
        } 
         if (file.fieldname === "bankinfo") {
            loc = "public/bankinfo"
        } 
         if (file.fieldname === "support") {
            loc = "public/support"
        } 
         if (file.fieldname === "formb") {
            loc = "public/formb"
        } 
         if (file.fieldname === "planofprocessingunit") {
            loc = "public/planofprocessingunit"
        } 
         if (file.fieldname === "listofdirectors") {
            loc = "public/listofdirectors"
        } 
         if (file.fieldname === "equipmentlist") {
            loc = "public/equipmentlist"
        } 
         if (file.fieldname === "authorityletter") {
            loc = "public/authorityletter"
        } 
         if (file.fieldname === "waterreport") {
            loc = "public/waterreport"
        } 
         if (file.fieldname === "coopactcert") {
            loc = "public/coopactcert"
        } 
         if (file.fieldname === "sourceofrawmaterial") {
            loc = "public/sourceofrawmaterial"
        } 
         if (file.fieldname === "recallplan") {
            loc = "public/recallplan"
        } 
         if (file.fieldname === "ministryofcommercecert") {
            loc = "public/ministryofcommercecert"
        } 
         if (file.fieldname === "nocpa") {
            loc = "public/nocpa"
        } 
         if (file.fieldname === "iecode") {
            loc = "public/iecode"
        } 
         if (file.fieldname === "formix") {
            loc = "public/formix"
        } 
         if (file.fieldname === "tourcert") {
            loc = "public/tourcert"
        } 
         if (file.fieldname === "supportdocs") {
            loc = "public/supportdocs"
        } 
         if (file.fieldname === "dec") {
            loc = "public/dec"
        } 


        fs.mkdirSync(loc, { recursive: true })
        cb(null, loc)
    },
})



// gst-filing
exports.multiDocUpload = multer({ storage: multiDocs, limits: { fileSize: "1mb" } }).fields([
    { name: "pancard", maxCount: 1 },
    { name: "partnershipdeed", maxCount: 1 },
    { name: "photo", maxCount: 1 },
    { name: "addressproof", maxCount: 1 },
    { name: "adhar", maxCount: 1 },
    { name: "proofofappointment", maxCount: 1 },
    { name: "llpregcert", maxCount: 1 },
    { name: "bankacc", maxCount: 1 },
])



// company
exports.limitedLiabilityUpload = multer({ storage: limitedLiability, limits: { fileSize: "1mb" } }).fields([
    { name: "adhar", maxCount: 1 },
    { name: "pan", maxCount: 1 },
    { name: "incorporation", maxCount: 1 },
    { name: "gstin", maxCount: 1 },
    { name: " addressproof", maxCount: 1 },
    { name: "bankacc", maxCount: 1 },

])
exports.onepersondocsUpload = multer({ storage: oneperson, limits: { fileSize: "1mb" } }).fields([
    { name: "pancard", maxCount: 1 },
    { name: "panofinterprice", maxCount: 1 },
    { name: "adhar", maxCount: 1 },
    { name: "photo", maxCount: 1 },
    { name: "contactdetails", maxCount: 1 },
    { name: "rentorbill", maxCount: 1 },
    { name: "dec", maxCount: 1 },
    { name: "inc", maxCount: 1 },
    { name: "noobjcert", maxCount: 1 },

])
exports.partnershipdocsUpload = multer({ storage: partnership, limits: { fileSize: "1mb" } }).fields([
    { name: "addressoffirm", maxCount: 1 },
    { name: "addressofpartner", maxCount: 1 },
    { name: "nature", maxCount: 1 },
    { name: "profitratio", maxCount: 1 },
    { name: "capitalcontribution", maxCount: 1 },
    { name: "rules", maxCount: 1 },
    { name: "adhar", maxCount: 1 },
    { name: "pan", maxCount: 1 },
    { name: "regcert", maxCount: 1 },
    { name: "partnershipdeed", maxCount: 1 },
    { name: "dec", maxCount: 1 },
    { name: "proofofcapital", maxCount: 1 },

])
exports.shopactdocsUpload = multer({ storage: shopact, limits: { fileSize: "1mb" } }).fields([
    { name: "addreess", maxCount: 1 },
    { name: "adhar", maxCount: 1 },
    { name: "pan", maxCount: 1 },
    { name: "empdetails", maxCount: 1 },
    { name: "businesslicense", maxCount: 1 },


])
exports.udyamdocsUpload = multer({ storage: udyam, limits: { fileSize: "1mb" } }).fields([
    { name: "adhar", maxCount: 1 },
    { name: "pan", maxCount: 1 },
    { name: "encorporationcert", maxCount: 1 },
    { name: "gstin", maxCount: 1 },
    { name: "addressproof", maxCount: 1 },
    { name: "bankacc", maxCount: 1 },


])

// compliance
exports.tandocsUpload = multer({ storage: tan, limits: { fileSize: "1mb" } }).fields([
    { name: "pan", maxCount: 1 },
    { name: "personalinfo", maxCount: 1 },
    { name: "incorporation_certificate", maxCount: 1 },
    { name: "dsc", maxCount: 1 },
    { name: " drp", maxCount: 1 },
])
exports.businesspandocsUpload = multer({ storage: businesspan, limits: { fileSize: "1mb" } }).fields([
    { name: "schooltc", maxCount: 1 },
    { name: "matriccert", maxCount: 1 },
    { name: "degree", maxCount: 1 },
    { name: "dipositoryacc", maxCount: 1 },
    { name: "creditcard", maxCount: 1 },
    { name: "bankacc", maxCount: 1 },
    { name: "waterbill", maxCount: 1 },
    { name: "rationcard", maxCount: 1 },
    { name: "propertytax", maxCount: 1 },
    { name: "passport", maxCount: 1 },
    { name: "voterid", maxCount: 1 },
    { name: "drivinglicense", maxCount: 1 },
    { name: "certofid", maxCount: 1 },
    { name: "electricitybill", maxCount: 1 },
    { name: "telephonebill", maxCount: 1 },
    { name: "employercert", maxCount: 1 },
    { name: "rentreceipt", maxCount: 1 },
    { name: "affidavit", maxCount: 1 },
    { name: "any", maxCount: 1 },
    { name: "incorporationcert", maxCount: 1 },
    { name: "partnershipdeed", maxCount: 1 },
    { name: "registrarfirm", maxCount: 1 },
    { name: "trustdeed", maxCount: 1 },
    { name: "charity", maxCount: 1 },
    { name: "charitycert", maxCount: 1 },
    { name: "centralogvt", maxCount: 1 },
    { name: "centralogvt", maxCount: 1 },
])
exports.farmerregistrationdocsUpload = multer({ storage: farmerreg, limits: { fileSize: "1mb" } }).fields([
    { name: "incrporationcert", maxCount: 1 },
    { name: "panofcompany", maxCount: 1 },
    { name: "pan", maxCount: 1 },
    { name: "taxdeduction", maxCount: 1 },
    { name: "aoa", maxCount: 1 },
    { name: "electricitybill", maxCount: 1 },
    { name: "adhars", maxCount: 1 },
    { name: "bankstatement", maxCount: 1 },
    { name: "farmercert", maxCount: 1 },
    { name: "officeaddressproof", maxCount: 1 },
    { name: "telephonebill", maxCount: 1 },
    { name: "gasbill", maxCount: 1 },
    { name: "spicform", maxCount: 1 },
    { name: "emoa", maxCount: 1 },
    { name: "eaoa", maxCount: 1 },

])
exports.foodlicensedocsUpload = multer({ storage: foodLicense, limits: { fileSize: "1mb" } }).fields([
    { name: "photo", maxCount: 1 },
    { name: "bcc", maxCount: 1 },
    { name: "proofbusinesspremises", maxCount: 1 },
    { name: "fsmsp", maxCount: 1 },
    { name: "listoffood", maxCount: 1 },
    { name: "bankinfo", maxCount: 1 },
    { name: "supportdocs", maxCount: 1 },
    { name: "formb", maxCount: 1 },
    { name: "planofprocessing", maxCount: 1 },
    { name: "listofdirectors", maxCount: 1 },
    { name: "listofequipment", maxCount: 1 },
    { name: "authorityletter", maxCount: 1 },
    { name: "analysisreportofwater", maxCount: 1 },
    { name: "certobtainundercoopact", maxCount: 1 },
    { name: "generallicense", maxCount: 1 },
    { name: "formbduly", maxCount: 1 },
    { name: "sourceofrawmaterial", maxCount: 1 },
    { name: "recallplan", maxCount: 1 },
    { name: "ministryofcommercecert", maxCount: 1 },
    { name: "nocpa", maxCount: 1 },
    { name: "iecode", maxCount: 1 },
    { name: "formix", maxCount: 1 },
    { name: "ministrytourcert", maxCount: 1 },
    { name: "supportingdocs", maxCount: 1 },
    { name: "decform", maxCount: 1 },
])
exports.trademarkdocsUpload = multer({ storage: trademark, limits: { fileSize: "1mb" } }).fields([
    { name: "photo", maxCount: 1 },
    { name: "bcc", maxCount: 1 },
    { name: "proofofbusinesspremices", maxCount: 1 },
    { name: "foodsafetyplan", maxCount: 1 },
    { name: "listoffood", maxCount: 1 },
    { name: "bankinfo", maxCount: 1 },
    { name: "support", maxCount: 1 },
    { name: "formb", maxCount: 1 },
    { name: "planofprocessingunit", maxCount: 1 },
    { name: "listofdirectors", maxCount: 1 },
    { name: "equipmentlist", maxCount: 1 },
    { name: "authorityletter", maxCount: 1 },
    { name: "waterreport", maxCount: 1 },
    { name: "coopactcert", maxCount: 1 },
    { name: "sourceofrawmaterial", maxCount: 1 },
    { name: "recallplan", maxCount: 1 },
    { name: "ministryofcommercecert", maxCount: 1 },
    { name: "nocpa", maxCount: 1 },
    { name: "iecode", maxCount: 1 },
    { name: "formix", maxCount: 1 },
    { name: "tourcert", maxCount: 1 },
    { name: "supportdocs", maxCount: 1 },
    { name: "dec", maxCount: 1 },
   
])

// 00V3QR71j7hQyZCP
// mongosh "mongodb+srv://cluster0.kxh9p4r.mongodb.net/" --apiVersion 1 --username taxgiin