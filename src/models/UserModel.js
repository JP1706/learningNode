// Import Mongoose
const mongoose = require ("mongoose")

// Create Schema Object
const Schema = mongoose.Schema

// Create User Schema
const userSchema = new Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    email : {
        type : String,
        Unique : true
    },
    password : {
        type : String
    },
    gender: {
        type : String
    },
    number : {
        type : Number
    },
    roleId : {
        type : Schema.Types.ObjectId,
        ref : "roles"
    }
})

// Export Module
module.exports = mongoose.model("users", userSchema)