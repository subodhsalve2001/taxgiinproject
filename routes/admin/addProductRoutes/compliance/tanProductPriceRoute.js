const { gettanProducts, AddtanProduct, deleteProduct } = require("../../../../controller/admin/product price/compliance/tanProductPriceController")
const router = require("express").Router()
router
    .get("/", gettanProducts)
    .post("/add", AddtanProduct)
    .delete("/delete", deleteProduct)

module.exports = router