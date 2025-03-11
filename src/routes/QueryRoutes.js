var routes = require("express").Router()

var queryController = require ("../controllers/QueryController")

routes.post("/addQuery", queryController.addQuery)
routes.get("/getQueries", queryController.getQueries)

module.exports = routes