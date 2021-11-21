const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ApiSchema = new Schema({
    SHS:{
        type:String,
        required:true,
    },
    District:{
        type:String,
        required:true,
    },
    Location:{
        type:String,
        required:true,
    },
    Gender:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
    },
    Region:{
        type:String,
        required:true,
    },
})

const shsAPI = mongoose.model('shsAPI', ApiSchema)
module.exports = shsAPI;