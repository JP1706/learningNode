const fileUploadModel = require("../models/FileUploadModel")
const multer = require("multer")
const path = require("path")
const CloudinaryUtil = require("../utils/CloudinaryUtil")

//Storage Engine
const Storage = multer.diskStorage({
    destination : "./uploads",
    filename : function(req, file, cb) {
        cb(null, file.originalname)
    }
})

//Multer Object
const upload = multer({
    storage : Storage
}).single("image")

// Testing API
// const addFile = async (req, res) => {
//     upload(req, res, (err) => {
//         if(err) {
//             res.status(500).json({
//                 message : err.message
//             })
//         }
//         else {
//             console.log(req.body)
//             res.status(200).json({
//                 message: "File uploaded successfully",
//                 data: req.file
//             })
//         }
//     })
// }

// POST API
const addFile = async (req, res) => {

    upload(req, res, async (err) => {
        if(err) {
            res.status(500).json({
                message : err.message
            })
        }
        else {
            const CloudinaryResponse = await CloudinaryUtil.uploadFileToCloudinary(req.file)
            console.log(CloudinaryResponse)
            console.log(req.body)

            req.body.fileUrl = CloudinaryResponse.secure_url
            const addingFile = await fileUploadModel.create(req.body)

            res.status(200).json({
                message : "File Uploaded Successfully",
                data : addingFile
            })
        }
    })


}

module.exports = {
    addFile
}