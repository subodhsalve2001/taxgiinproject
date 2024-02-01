const { deleteProduct, getdsProducts, AdddsProduct, } = require("../../../../controller/admin/product price/compliance/digitalSignatureProductPriceController")
const router = require("express").Router()
router
    .get("/", getdsProducts)
    .post("/add", AdddsProduct)
    .delete("/delete", deleteProduct)

module.exports = router