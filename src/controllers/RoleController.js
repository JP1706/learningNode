// Importing Model
const roleModel = require("../models/RoleModels")


// Get API
const getAllRoles = async(req, res) => {

    const roles = await roleModel.find()
    res.json({
        message : "Roles Fetched Successfully",
        data : roles
    })
}

// Post API
const addRoles = async (req, res) => {
    const savedRole = await roleModel.create(req.body)

    res.json({
        message : "Role Added Successfully",
        data : savedRole
    })
}

// Delete API
const deleteRole = async (req, res) => {
    const deletedRole = await roleModel.findByIdAndDelete(req.params.id)

    res.json({
        message : "Role Deleted Successfully",
        data : deletedRole
    })
}

// Search By Id API
const getRoleById = async (req, res) => {
    const foundRole = await roleModel.findById(req.params.id)

    res.json({
        message : "Role Found",
        data : foundRole
    })
}


// Exporting All API's
module.exports = {
    getAllRoles, addRoles, deleteRole, getRoleById
}