const { getpartnershipProducts, AddpartnersipProduct, deleteProduct } = require("../../../../controller/admin/product price/company registration/partnershipDeedProductPriceController")

const router = require("express").Router()
router.get("/", getpartnershipProducts)
router.post("/add", AddpartnersipProduct)
router.delete("/delete", deleteProduct)
module.exports = router