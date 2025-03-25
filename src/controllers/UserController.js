const userModel = require("../models/UserModel")
const bcrypt = require("bcrypt")
const mailUtil = require("../utils/MailUtil")
const jwt = require("jsonwebtoken")
const secret = "jeni"


// Signup API
const signUp = async (req, res) => {
    try {
        // Encrypting Password
        const salt = bcrypt.genSaltSync(10)
        const hashedPasssword = bcrypt.hashSync(req.body.password, salt)
        req.body.password = hashedPasssword

        // Registering User
        const registerUser = await userModel.create(req.body)

        //Sending Mail
        await mailUtil.sendingMail(registerUser.email, "Welome Mail", "YouthSafe Community Welcomes you " + registerUser.firstName)

        res.status(201).json({
            message: "User Created Successfully",
            data: registerUser
        })
    } catch (err) {
        res.status(500).json({
            message: "Error",
            data: err
        })
    }
}

// Login API
const login = async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password

        const foundUserByEmail = await userModel.findOne({ email: email }).populate("roleId", "name-_id")
        if (foundUserByEmail != null) {
            const isMatch = bcrypt.compareSync(password, foundUserByEmail.password)

            if (isMatch) {
                res.status(201).json({
                    message: "Login Successful",
                    data: foundUserByEmail
                })
            }
            else {
                res.status(404).json({
                    message: "Invalid Credentials"
                })
            }
        }
        else {
            res.status(404).json({
                message: "Email Not Found"
            })
        }
    } catch (err) {
        res.status(404).json({
            message: "Error",
            data: err
        })
    }
}

// Get API
const getUsers = async (req, res) => {

    try {
        const getUser = await userModel.find().populate("roleId", "name-_id")

        res.status(200).json({
            message: "Data Fetched Successfully",
            data: getUser
        })
    } catch (error) {
        res.status(500).json({
            message: "Error",
            data: error
        })
    }
}

// Post API
const addUser = async (req, res) => {

    try {
        const savedUser = await userModel.create(req.body)

        res.json({
            message: "User Created Successfukly",
            data: savedUser
        })
    } catch (error) {
        res.status(500).json({
            message: "Error",
            data: error
        })
    }

}

// Delete API
const deleteUser = async (req, res) => {

    try {
        const deletedUser = await userModel.findByIdAndDelete(req.params.id)

        res.json({
            message: "User Deleted Successfully",
            data: deletedUser
        })
    } catch (error) {
        res.status(500).json({
            message: "Error",
            data: error
        })
    }
}

// Get By Id API
const getUserById = async (req, res) => {

    try {
        const searchUser = await userModel.findById(req.params.id).populate("roleId")

        res.json({
            message: "User Found",
            data: searchUser
        })
    } catch (error) {
        res.status(500).json({
            message: "Error",
            data: error
        })
    }
}

const forgotPassword = async (req, res) => {
    const email = req.body.email

    const foundUser = await userModel.findOne({ email: email })

    if (foundUser) {
        const token = jwt.sign(foundUser.toObject(), secret)
        const url = `http://localhost:5173/resetPassword/${token}`

        const mailContent = `<html>
            <a href=${url}>Reset Password</a>
        </html>`

        await mailUtil.sendingMail(foundUser.email, "Reset Password", mailContent)

        res.json({
            message : "Sending Mail for password Reset"
        })
    }
    else{
        res.json({
            message : "User Not Found"
        })
    }
}

// Export Controller
module.exports = {
    getUsers, addUser, deleteUser, getUserById, signUp, login, forgotPassword
}