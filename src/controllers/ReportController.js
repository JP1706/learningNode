const reportModel = require("../models/ReportModel")

const multer = require("multer")

const CloudinaryUtil = require("../utils/CloudinaryUtil")

const Storage = multer.diskStorage({
    destination : "./perpetratorsImages",
    filename : function(req, file, cb) {
        cb(null, file.originalname)
    } 
})

const upload = multer({
    storage : Storage
}).single("image")

const addReport = async (req, res) => {
    upload(req, res, async (err) => {
        if(err) {
            res.status(500).json({
                message : err.message
            })
        }
        else {
            const CloudinaryResponse = await CloudinaryUtil.uploadFileToCloudinary(req.file)
            req.body.perpetratorImageURL = CloudinaryResponse.secure_url

            try{
                const saveReport = await reportModel.create(req.body)
                res.status(201).json({
                    message : "Report Submitted",
                    data : saveReport
                })
            }
            catch(err) {
                res.status(500).json({
                    message : err
                })
            }

        }
    })
}

module.exports = {
    addReport
}