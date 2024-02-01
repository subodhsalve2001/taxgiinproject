const { getfoodProducts, deleteProduct, AddfoodProduct } = require("../../../../controller/admin/product price/compliance/foodProductPriceController")
const router = require("express").Router()
router
    .get("/", getfoodProducts)
    .post("/add", AddfoodProduct)
    .delete("/delete", deleteProduct)

module.exports = router