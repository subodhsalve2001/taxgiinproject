const jwt = require("jsonwebtoken")
const user = require("../../models/userSchema")
const admin = require("../../models/admin/admin")
const bcrypt = require("bcryptjs")
exports.registerAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            res.json({ message: "All Fields Required" })
        }
        const found = await admin.findOne({ email })
        if (found) {
            req.json({ message: "Email Already Exist" })
        } else {
            const hashPass = await bcrypt.hash(password, 10)
            const result = await admin.create({
                name,
                email,
                password: hashPass
            })
            res.status(201).json({
                message: "Rgister Success",
                result
            })

        }

    } catch (error) {
        res.status(400).json({ message: "Error" + error })

    }
}
exports.loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            res.json({ message: "All Fields Required" })
        }
        const result = await admin.findOne({ email })
        if (!result) {
            req.json({ message: "Email not register with us" })
        }

        const verify = await bcrypt.compare(password, result.password)
        if (!verify) {
            res.status(401).json({ message: "Invalid Email or Password" })
        }
        const token = jwt.sign({ id: result._id }, process.env.SECRET_KEY, { expiresIn: "1d" })
        res.cookie("admin", token, {
            httpOnly: true,
            secure: true,
            maxAge: 1000 * 60 * 15
        })

        res.status(201).json({
            message: "Login Success",
            result: {
                name: result.name,
                email: result.email,
                token
            }
        })

    } catch (error) {
        res.status(400).json({ message: "Error" + error })

    }
}
exports.getAllUsers = async (req, res) => {
    try {
        const result = await user.find()
        res.status(201).json({ message: "All User Fetch Success", result })
    } catch (error) {
        res.status(400).json("message" + error)
    }

}