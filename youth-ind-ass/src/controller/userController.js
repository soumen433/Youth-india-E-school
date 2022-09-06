const jwt = require("jsonwebtoken")

const userModel = require("../model/userModel")


const registerUser = async function (req, res) {

    try {
        let userData = req.body
        let { firstName, lastName, email, password } = userData
        console.log(firstName)

        if (!firstName) { return res.status(400).send({ msg: "first name must require" }) }

        if (!lastName) return res.status(400).send({ msg: "last name must require" })

        if (!email) return res.status(400).send({ msg: "email must require" })

        if (!password) return res.status(400).send({ msg: "password must require" })

        let saveUser = await userModel.create(userData)

        return res.status(201).send({ msg: "user register successfully", data: saveUser })
    }
    catch (err) {
        return res.status(500).send({ Status: false, msg: "Error", error: err.message })
    }


}


const userLogin = async function (req, res) {
    try {

        let data = req.body
        let { email, password } = data

        if (!email) return res.status(400).send({ msg: "email must require" })

        if (!password) return res.status(400).send({ msg: "password must require" })

        let checkUser = await userModel.findOne({ email: data.email, password: data.password })
        if (!checkUser) {
            return res.status(400).send({ status: false, message: "Email or Password is not valid" })
        }

        const token = jwt.sign({
            userId: checkUser._id,
        }, "youth-india-E-school")

        res.setHeader("x-api-key", token);   //set the token in response Header
        res.status(200).send({ status: true, message: "success", data: token })
    }
    catch (err) {
        return res.status(500).send({ Status: false, msg: "Error", error: err.message })
    }

}
module.exports.registerUser = registerUser
module.exports.userLogin = userLogin