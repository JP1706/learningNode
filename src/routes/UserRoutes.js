// Import Routes
const routes = require("express").Router()

// Import Controller
const userController = require("../controllers/UserController")

// Creating Routes

routes.get("/getUser", userController.getUsers)
routes.post("/addUser", userController.addUser)
routes.delete("/user/:id", userController.deleteUser)
routes.get("/user/:id", userController.getUserById)
routes.post("/signup", userController.signUp)
routes.post("/login", userController.login)
routes.post("/forgotPassword", userController.forgotPassword)


// Exporting Routes
module.exports = routes