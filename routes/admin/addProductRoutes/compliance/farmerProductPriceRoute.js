const {  deleteProduct, getfarmerProducts, AddfarmerProduct,  } = require("../../../../controller/admin/product price/compliance/farmerProductPriceController")
const router = require("express").Router()
router
    .get("/", getfarmerProducts)
    .post("/add", AddfarmerProduct)
    .delete("/delete", deleteProduct)

module.exports = router