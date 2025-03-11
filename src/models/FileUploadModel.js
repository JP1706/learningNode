const mongoose = require("mongoose")

const Schema = mongoose.Schema

const fileUploadSchema = new Schema({
    name : {
        type : String,
    },
    fileUrl : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("files", fileUploadSchema)