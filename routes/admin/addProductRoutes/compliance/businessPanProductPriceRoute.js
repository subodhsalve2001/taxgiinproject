const {  deleteProduct, getbusinesspanProducts, AddbusinesspanProduct } = require("../../../../controller/admin/product price/compliance/businesspanProductPriceController")
const router = require("express").Router()
router
    .get("/", getbusinesspanProducts)
    .post("/add", AddbusinesspanProduct)
    .delete("/delete", deleteProduct)

module.exports = router