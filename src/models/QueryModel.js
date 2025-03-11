const mongoose = require("mongoose")

const Schema = mongoose.Schema

const querySchema = new Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref : "users"
    },
    category : {
        type : String,
        enum : ["Cyberbullying", "Mental Health Concerns", "Online Safety Issues", "Peer Pressure", "Other"],
        required : true
    },
    description : {
        type : String
    },
    status : {
        type : String,
        enum : ["Pending", "Resolved"],
        default : "Pending"
    }
},
{
    timestamps : true
})

module.exports = mongoose.model("queries", querySchema)