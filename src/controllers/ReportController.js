const reportModel = require("../models/ReportModel")

const multer = require("multer")

const CloudinaryUtil = require("../utils/CloudinaryUtil")

// Storage
const Storage = multer.diskStorage({
    destination: "./perpetratorsImages",
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

// Multer Object
const upload = multer({
    storage: Storage
}).single("image")

//Post API
const addReport = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            res.status(500).json({
                message: err.message
            })
        }
        else {
            const CloudinaryResponse = await CloudinaryUtil.uploadFileToCloudinary(req.file)
            req.body.perpetratorImageURL = CloudinaryResponse.secure_url

            try {
                const saveReport = await reportModel.create(req.body)
                res.status(201).json({
                    message: "Report Submitted",
                    data: saveReport
                })
            }
            catch (err) {
                res.status(500).json({
                    message: err
                })
            }

        }
    })
}

// Get API for Particular User
const getReportsByUserId = async (req, res) => {
    try {
        const getReportsByUserId = await reportModel.find({ userId: req.params.userId })

        if (getReportsByUserId.length === 0) {
            res.status(404).json({ message: "No Reports Found" })
        }
        res.status(201).json({
            message: "Reports Found Successfully",
            data: getReportsByUserId
        })
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

// Get API for All Users
const getAllReports = async (req, res) => {
    try {
        const Reports = await reportModel.find()

        if (Reports.length === 0) {
            res.status(404).json({ messsage: "No Reports Found" })
        }

        res.status(201).json({
            message: "Reports Found Successfully",
            data: Reports
        })
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

module.exports = {
    addReport, getReportsByUserId, getAllReports
}