const { continueWithGoogle1, logoutUser } = require("../controller/authController")

const router = require("express").Router()

router
    .post("/continue-with-google", continueWithGoogle1)
    .post("/logout", logoutUser)



module.exports = router