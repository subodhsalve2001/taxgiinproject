const {getAlldocsController,addDocController,deleteAlldocsController} =require("../../controller/upload-controllers/company/limitedLiabilityDocsUploadController")
const router = require("express").Router()
router
    .get("/", getAlldocsController)
    .post("/add", addDocController)
    .delete("/delete", deleteAlldocsController)
module.exports = router