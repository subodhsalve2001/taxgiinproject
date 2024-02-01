const shopAct = require("../../../../models/admin/productPrice/company registration/shopActPoductPriceModel")
exports.getShopActProducts = async (req, res) => {
    try {
        const result = await shopAct.find()
        res.status(201).json({ message: "All Product Fetch Success", result })
    } catch (error) {
        res.status(400).json({ message: "Error" + error })
    }
}
exports.AddShopActProduct = async (req, res) => {
    try {
        const { title, price, desc } = req.body
        if (!title || !price) {
            throw new Error("All Fields Required")
        }
        const result = await shopAct.create({ title, price, desc })
        res.status(201).json({ message: "Product Added Success", result })
    } catch (error) {
        res.status(400).json({ message: "Error" + error })
    }
}
exports.deleteProduct = async (req, res) => {
    try {
        const reult = await shopAct.deleteMany()
        res.json({
            message: "Product Delete Success",
        })
    } catch (error) {
        res.json({
            message: "error" + error
        })
    }
}