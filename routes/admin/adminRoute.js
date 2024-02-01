const { registerAdmin, loginAdmin, getAllUsers } = require("../../controller/admin/adminController")

const router = require("express").Router()
router
    .post("/register", registerAdmin)
    .post("/login", loginAdmin)
    .get("/allusers", getAllUsers)

module.exports = router