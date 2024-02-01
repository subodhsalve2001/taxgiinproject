const express = require("express");
const asyncHandler = require("express-async-handler")
const router = new express.Router();
const userdb = require("../models/userSchema");
var bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const keysecret = process.env.SECRET_KEY



// email config

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})


// for user registration

router.post("/register", async (req, res) => {

    const { name, email, password, username, mobile } = req.body;

    if (!name || !email || !password || !username || !mobile) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {

        const preuser = await userdb.findOne({ email: email });

        if (preuser) {
            res.status(422).json({ error: "This Email is Already Exist" })
        } else {
            const finalUser = new userdb({
                name, email, password, username, mobile
            });

            // here password hasing

            const storeData = await finalUser.save();
            // console.log(storeData);
            res.status(201).json({ status: 201, storeData })
        }

    } catch (error) {
        res.status(422).json("error", error.message);
        // console.log("catch block error");
    }

});

// user Login
router.post("/login", async (req, res) => {
    console.log(req.body);

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {
        const userValid = await userdb.findOne({ email: email });

        if (userValid) {

            const isMatch = await bcrypt.compare(password, userValid.password);

            if (!isMatch) {
                res.status(422).json({ error: "invalid details" })
            } else {

                // token generate
                const token = await userValid.generateAuthtoken();
                console.log(token);
                // cookiegenerate
                res.cookie("usercookies", token);
                // document.cookie("usercookies",token)
                const result = {
                    userValid
                }

                res.status(201).json({ status: 201, result, token })
            }
        } else {
            res.status(401).json({ status: 401, message: "invalid details" });
        }

    } catch (error) {
        res.status(401).json({ message: "error" + error });
        console.log("catch block");
    }
});
// router.post("/login", async (req, res) => {
//     const { email, password } = req.body
//     if (!email || !password) {
//         return res.status(401).json({
//             message: "All feilds required"
//         })
//     }
//     const result = await userdb.findOne({ email })

//     if (!result) {
//         return res.status(401).json({
//             message: "email is not registered with us "
//         })
//     }

//     const verify = await bcrypt.compare(password, result.password)
//     if (!verify) {
//         return res.status(401).json({
//             message: "email or password wrong"
//         })
//     }
//     const token = jwt.sign({ id: result._id }, process.env.SECRET_KEY, { expiresIn: "1d" })
//     console.log(token);
//     res.cookie("user", token, {
//         httpOnly: true,
//         secure: true,
//         maxAge: 1000 * 60 * 15
//     })
//     res.json({
//         message: "Login Success",
//         result: {
//             email,
//             password,
//             token
//         }
//     })
// })





// user valid
router.get("/validuser", authenticate, async (req, res) => {
    try {
        const ValidUserOne = await userdb.findOne({ _id: req.userId });
        res.status(201).json({ status: 201, ValidUserOne });
    } catch (error) {
        res.status(401).json({ status: 401, error });
    }
});

router.get("/details/:userId", async (req, res) => {
    const { userId } = req.params
    const result = await userdb.findById(userId)
    res.json({
        message: "User fetch Success",
        result
    })
})

// user logout

router.get("/logout", authenticate, async (req, res) => {
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
            return curelem.token !== req.token
        });

        res.clearCookie("usercookie", { path: "/" });

        req.rootUser.save();

        res.status(201).json({ status: 201 })

    } catch (error) {
        res.status(401).json({ status: 401, error })
    }
});



// send email Link For reset Password
router.post("/sendpasswordlink", async (req, res) => {
    console.log(req.body)

    const { email } = req.body;

    if (!email) {
        res.status(401).json({ status: 401, message: "Enter Your Email" })
    }

    try {
        const userfind = await userdb.findOne({ email: email });

        // token generate for reset password
        const token = jwt.sign({ _id: userfind._id }, keysecret, {
            expiresIn: "120s"
        });
        const setusertoken = await userdb.findByIdAndUpdate({ _id: userfind._id }, { verifytoken: token }, { new: true });
        if (setusertoken) {
            const mailOptions = {
                from: process.env.EMAIL,
                to: email,
                subject: "Sending Email For password Reset",
                // text: `This Link Valid For 2 MINUTES http://127.0.0.1:5501/frontend/updatePassword.html`
                text: `This Link Valid For 2 MINUTES http://127.0.0.1:5501/frontend/updatePassword.html/${userfind.id}/${setusertoken.verifytoken}`
            }
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log("error", error);
                    res.status(401).json({ status: 401, message: "email not send" })
                } else {
                    console.log("Email sent", info.response);
                    res.status(201).json({ status: 201, message: "Email sent Succsfully" })
                }
            })
        }

    } catch (error) {
        res.status(401).json({ status: 401, message: "invalid user" })
    }
});
// verify user for forgot password time
router.get("/forgotpassword/:id/:token", async (req, res) => {
    const { id, token } = req.params;
    try {
        const validuser = await userdb.findOne({ _id: id, verifytoken: token });
        const verifyToken = jwt.verify(token, keysecret);
        console.log(verifyToken)

        if (validuser && verifyToken._id) {
            res.status(201).json({ status: 201, validuser })
        } else {
            res.status(401).json({ status: 401, message: "user not exist" })
        }
    } catch (error) {
        res.status(401).json({ status: 401, error })
    }
});
// change password
router.post("/:id/:token", async (req, res) => {
    const { id, token } = req.params;
    const { password } = req.body;
    try {
        const validuser = await userdb.findOne({ _id: id, verifytoken: token });

        const verifyToken = jwt.verify(token, keysecret);

        if (validuser && verifyToken._id) {
            const newpassword = await bcrypt.hash(password, 12);

            const setnewuserpass = await userdb.findByIdAndUpdate({ _id: id }, { password: newpassword });

            setnewuserpass.save();
            res.status(201).json({ status: 201, setnewuserpass })

        } else {
            res.status(401).json({ status: 401, message: "user not exist" })
        }
    } catch (error) {
        res.status(401).json({ status: 401, error })
    }
})

router.get("/", async (req, res) => {
    try {
        const result = await userdb.find()
        res.json({
            message: "user fetch success",
            result
        })
    } catch (error) {
        res.json({
            message: "error" + error.message,
        })
    }
})
router.delete("/destroy", async (req, res) => {
    try {
        const result = await userdb.deleteMany()
        res.json({
            message: "user delete success",
            result
        })
    } catch (error) {
        res.json({
            message: "error" + error.message,
        })
    }
})
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        console.log(id);
        const result = await userdb.findOne({ _id: id })
        console.log(result);
        if (!result) {
            throw new Error("User Not Found")

        }
        res.status(201).json({ message: "User Fetch Success", result })
    } catch (error) {
        res.status(400).json({ message: "Error" + error })
    }

})


module.exports = router;


// 2 way connection
// 12345 ---> e#@$hagsjd
// e#@$hagsjd -->  12345

// hashing compare
// 1 way connection
// 1234 ->> e#@$hagsjd
// 1234->> (e#@$hagsjd,e#@$hagsjd)=> true















