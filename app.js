require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const cors = require("cors");
const cookiParser = require("cookie-parser")
const bodyParser = require('body-parser');
const multer = require("multer")
const path = require("path")
var fs = require('fs');
const { docUpload } = require("./utils/upload")
app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(bodyParser.json());
const { v4: uuid } = require("uuid");
const { OAuth2Client } = require('google-auth-library');
//   multer start
// app.set("view engine", "html")
// app.engine('html', require('ejs').renderFile);
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public/uploads')
//     },
//     filename: function (req, file, cb) {
//         const ext = path.extname(file.originalname)
//         const allowedExt = [".pdf", ".jpg", ".jpeg", ".png", ".docs", ".txt"]
//         if (!allowedExt.includes(ext)) {
//             cb("invalid file extension")
//         }
//         const fn = uuid() + ext
//         cb(null, fn, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
// })
// const upload = multer({ storage: storage, limits: { fileSize: "1mb" } })

// const multiUpload = upload.fields([{ name: 'adhar', maxCount: 1 }, { name: 'pan', maxCount: 3 }, { name: 'businesspan' }, { name: 'udyam' }, { name: "files1" }, { name: 'files2' }, { name: 'files3' }, { name: 'files4' }])
// app.get('/', (req, res) => {
//     res.render('./index.html')
//     res.send("file uploaded")
// })

// app.post('/', multiUpload, (req, res) => {
//     if (req.files) {
//         console.log("file upload");
//         console.log(req.files);
//     }
// })

// multer end



// google auth start

// async function verify() {
//     const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
//     const ticket = await client.verifyIdToken({
//         idToken: token,
//         audience: 214830644505 - o0o306cidis9j2u2i4f55tes9dm3vb20.apps.googleusercontent.com,  // Specify the CLIENT_ID of the app that accesses the backend
// Or, if multiple clients access the backend:
// [CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
// });
// const payload = ticket.getPayload();
// const userid = payload['sub'];
// If request specified a G Suite domain:
//     const domain = payload['hd'];
// }
// verify().catch(console.error);


// app.get("/gauthenticate", async (req, res) => {
//     const client = new OAuth2Client();
// })
// google auth end




app.use("/api/user", require("./routes/userRouter"))
app.use("/api/auth", require("./routes/authRoutes"))
app.use("/api/admin", require("./routes/admin/adminRoute"))


// product price
app.use("/api/products/gst/gst-filing", require("./routes/admin/addProductRoutes/gst/GstProductRoute"))
app.use("/api/products/company-registration/shopact", require("./routes/admin/addProductRoutes/company registration/shopActPriceRoute"))
app.use("/api/products/company-registration/udyam", require("./routes/admin/addProductRoutes/company registration/udyamPriceRoute"))
app.use("/api/products/company-registration/partnership", require("./routes/admin/addProductRoutes/company registration/udyamPriceRoute"))
app.use("/api/products/compliance/tan", require("./routes/admin/addProductRoutes/compliance/tanProductPriceRoute"))
app.use("/api/products/compliance/businesspan", require("./routes/admin/addProductRoutes/compliance/businessPanProductPriceRoute"))
app.use("/api/products/compliance/farmer", require("./routes/admin/addProductRoutes/compliance/farmerProductPriceRoute"))
app.use("/api/products/compliance/food", require("./routes/admin/addProductRoutes/compliance/foodProductPriceRoute"))
app.use("/api/products/compliance/digital-signature", require("./routes/admin/addProductRoutes/compliance/digitalSignatureProductPriceRoute"))



// upload

// gst
app.use("/api/docs/gstfiling", require("./routes/upload-routes/gst/gstFilingDocUploadRoutes"))


// company
app.use("/api/docs/company/limited-liability", require("./routes/upload-routes/limitedLiabilityDocUploadRoute"))
app.use("/api/docs/company/one-person", require("./routes/upload-routes/onePersonDocUploadRoute"))
app.use("/api/docs/company/partnership-deed", require("./routes/upload-routes/partnershipDocUploadRoute"))
app.use("/api/docs/company/shopact", require("./routes/upload-routes/shopactDocsUploadRoute"))
app.use("/api/docs/company/udyam", require("./routes/upload-routes/udyamDocsUploadRoute"))


// compliance
app.use("/api/docs/compliance/tan", require("./routes/upload-routes/compliance/tanDocsUploadRoute"))
app.use("/api/docs/compliance/businesspan", require("./routes/upload-routes/compliance/businessPanDocUploadRoute"))
app.use("/api/docs/compliance/farmer-registration", require("./routes/upload-routes/compliance/farmerRegistrationDocUploadRoute"))
app.use("/api/docs/compliance/trademark", require("./routes/upload-routes/compliance/trademarkDocUploadRoute"))
app.use("/api/docs/compliance/food-license", require("./routes/upload-routes/compliance/foodLicenseDocUploadRoute"))


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server start at port no : ${PORT}`);
})