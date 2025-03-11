const mongoose = require("mongoose")
const Schema = mongoose.Schema

const habitSchema = new Schema({
    fullname:{
        type:String,
        require:true
    },
    screenTime:{
        type:Number,
        require:true
    },
    socialMediaUsage:{
        type:String,
        enum:["rarely","occasionally","frequently"],
        require:true
    },
    sleepHours:{
        type:Number,
        require:true
    },
    physicalActivity:{
        type:String,
        require:true,
        enum:["sedentary","moderate","active"]
    },
    additionalComments:{
        type:String,
        require:true
    }
})
module.exports = mongoose.model("habit",habitSchema)