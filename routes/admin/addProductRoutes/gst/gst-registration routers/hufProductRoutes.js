const router = require("express").Router()
router.get("/", getGstFilingProducts)
router.post("/add", AddGstFilingProduct)
router.delete("/delete", deleteProduct)
module.exports = router