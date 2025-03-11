const routes = require("express").Router()

const reportController = require("../controllers/ReportController")

routes.post("/addReport", reportController.addReport)

module.exports = routes