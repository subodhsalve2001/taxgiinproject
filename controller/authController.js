const bcrypt = require("bcrypt")
const JWT = require("jsonwebtoken")
const { OAuth2Client } = require("google-auth-library")
const User = require("../models/userSchema")
exports.continueWithGoogle1 = async (req, res) => {
    const { tokenId, account } = req.body
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

    const verify = await client.verifyIdToken({ idToken: tokenId })
    if (!verify) {
        return res.status(400).json({ message: "account unverified" })
    }

    const { payload: { email, name, picture } } = verify
    let result
    result = await User.findOne({ email }).lean()
    if (result) {


        const token = JWT.sign({ id: result._id }, process.env.JWT_KEY)
        res.cookie("jwt", token, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true })
        // login
        res.json({
            message: "login success",
            result: { ...result, account }
        })
    } else {
        // register
        const data = account = await User.create({
            name,
            email,
            avatar: picture
        })

        const token = JWT.sign({ id: data._id }, process.env.JWT_KEY)
        res.cookie("jwt", token, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true })
        res.json({
            message: "register success",
            result: { ...data, account }
        })

    }
}

exports.logoutUser = async (req, res) => {
    res.clearCookie("jwt")
    res.json({
        message: "Logout Success"
    })

}