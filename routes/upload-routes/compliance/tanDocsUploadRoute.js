const { getAlldocsController, addDocController, deleteAlldocsController } = require("../../../controller/upload-controllers/compliance/tanDocsUploadController")
const router = require("express").Router()
router
    .get("/", getAlldocsController)
    .post("/add", addDocController)
    .delete("/delete", deleteAlldocsController)
module.exports = router