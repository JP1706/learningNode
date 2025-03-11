const routes = require("express").Router()

const fileUploadController = require("../controllers/FileUploadController")

routes.post("/addwithfile", fileUploadController.addFile)

module.exports = routes