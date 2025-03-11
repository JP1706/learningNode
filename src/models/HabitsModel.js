const mongoose = require ("mongoose")

const Schema = mongoose.Schema

const habitSchema = new Schema({
    screenTime : {
        required : true,
        type : Number
    },
    
})