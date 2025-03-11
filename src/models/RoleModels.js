// Importing MongoDb
const mongoose = require("mongoose")

const Schema = mongoose.Schema // Schema Object Created

// Defining Schema
const roleSchema = new Schema({
    // roles
    name : {
        type : String
    },
    description : {
        type : String
    }
})

// Exporting Collection
module.exports = mongoose.model("roles", roleSchema)