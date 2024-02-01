const partnership = require("../../../../models/admin/productPrice/company registration/partnershipDeedProductPriceModel")
exports.getpartnershipProducts = async (req, res) => {
    try {
        const result = await partnership.find()
        res.status(201).json({ message: "All Product Fetch Success", result })
    } catch (error) {
        res.status(400).json({ message: "Error" + error })
    }
}
exports.AddpartnersipProduct = async (req, res) => {
    try {
        const { title, price, desc } = req.body
        if (!title || !price) {
            throw new Error("All Fields Required")
        }
        const result = await partnership.create({ title, price, desc })
        res.status(201).json({ message: "Product Added Success", result })
    } catch (error) {
        res.status(400).json({ message: "Error" + error })
    }
}
exports.deleteProduct = async (req, res) => {
    try {
        const reult = await partnership.deleteMany()
        res.json({
            message: "Product Delete Success",
        })
    } catch (error) {
        res.json({
            message: "error" + error
        })
    }
}