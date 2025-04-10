const routes = require("express").Router()

const reportController = require("../controllers/ReportController")

routes.post("/addReport", reportController.addReport)
routes.get("/getReportByUserId/:userId", reportController.getReportsByUserId)
routes.get("/getAllReports", reportController.getAllReports)
routes.get("/reports/:reportId", reportController.getReportById);

module.exports = routes