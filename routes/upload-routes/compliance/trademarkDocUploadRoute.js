const { getAlldocsController, addDocController, deleteAlldocsController } = require("../../../controller/upload-controllers/compliance/trademarkDocsUploadController")
const router = require("express").Router()
router
    .get("/", getAlldocsController)
    .post("/add", addDocController)
    .delete("/delete", deleteAlldocsController)
module.exports = router