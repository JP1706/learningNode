const mongoose = require ("mongoose")

const Schema = mongoose.Schema

const reportSchema = new Schema({
    fullName : {
        type : String,
        required : true 
    },
    userId : {
        type : Schema.Types.ObjectId,
        required : true
    },
    incidentType : {
        type : String,
        enum : ["Harrasment", "CyberBullying", "Violence", "Discrimination"]
    },
    description : {
        type : String,
        required : true
    },
    perpetratorImageURL : {
        type : String
    }
})

module.exports = mongoose.model("reports", reportSchema)