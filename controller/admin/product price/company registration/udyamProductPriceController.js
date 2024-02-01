const udyam=require("../../../../models/admin/productPrice/company registration/udyamProductPriceModel")
exports.getudyamProducts = async (req, res) => {
    try {
        const result = await udyam.find()
        res.status(201).json({ message: "All Product Fetch Success", result })
    } catch (error) {
        res.status(400).json({ message: "Error" + error })
    }
}
exports.AddUdyamProduct = async (req, res) => {
    try {
        const { title, price, desc } = req.body
        if (!title || !price) {
            throw new Error("All Fields Required")
        }
        const result = await udyam.create({ title, price, desc })
        res.status(201).json({ message: "Product Added Success", result })
    } catch (error) {
        res.status(400).json({ message: "Error" + error })
    }
}
exports.deleteProduct = async (req, res) => {
    try {
        const reult = await udyam.deleteMany()
        res.json({
            message: "Product Delete Success",
        })
    } catch (error) {
        res.json({
            message: "error" + error
        })
    }
}