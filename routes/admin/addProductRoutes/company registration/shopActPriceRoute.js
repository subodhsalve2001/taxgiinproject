const { getShopActProducts, AddShopActProduct, deleteProduct } = require("../../../../controller/admin/product price/company registration/shopActProductPriceController")

const router = require("express").Router()
router.get("/", getShopActProducts)
router.post("/add", AddShopActProduct)
router.delete("/delete", deleteProduct)
module.exports = router