const { getGstFilingProducts, AddGstFilingProduct, deleteProduct } = require("../../../../controller/admin/product price/gst/gstFilingPriceController")
// const { deleteProduct } = require("../../../controller/admin/product price/gst/gstFilingPriceController")
const router = require("express").Router()
router.get("/", getGstFilingProducts)
router.post("/add", AddGstFilingProduct)
router.delete("/delete", deleteProduct)
module.exports = router