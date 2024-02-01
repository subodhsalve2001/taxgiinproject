const { getAlldocsController, addDocController, deleteAlldocsController } = require("../../controller/upload-controllers/company/udyam_Docs_upload_Controller")
const router = require("express").Router()
router
    .get("/", getAlldocsController)
    .post("/add", addDocController)
    .delete("/delete", deleteAlldocsController)
module.exports = router