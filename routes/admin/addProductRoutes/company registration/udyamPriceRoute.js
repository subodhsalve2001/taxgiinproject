const { getudyamProducts, AddUdyamProduct, deleteProduct } = require("../../../../controller/admin/product price/company registration/udyamProductPriceController")

const router = require("express").Router()
router.get("/", getudyamProducts)
router.post("/add", AddUdyamProduct)
router.delete("/delete", deleteProduct)
module.exports = router