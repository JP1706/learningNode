// Importing Routes
const routes = require("express").Router()

// Importing Controller
const roleController = require("../controllers/RoleController")

routes.get("/roles", roleController.getAllRoles)
routes.post("/role", roleController.addRoles)
routes.delete("/role/:id", roleController.deleteRole)
routes.get("/role/:id", roleController.getRoleById)

// Exporting Routes
module.exports = routes