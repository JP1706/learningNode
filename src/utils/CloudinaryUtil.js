const cloudinary = require("cloudinary").v2

const uploadFileToCloudinary = async (file) => {
    // Config Your Details 
    cloudinary.config({
        cloud_name : "dwijleste",
        api_key : "184973584459911",
        api_secret : "KS6CzqlpU9ADfUDOFRAFsv7BPKw"
    })

    const cloudinaryResponse = await cloudinary.uploader.upload(file.path)
    return cloudinaryResponse
}

module.exports = {
    uploadFileToCloudinary
}