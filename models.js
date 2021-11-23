const mongoose = require('mongoose');
// const autoIncrement = require("mongoose-auto-increment");

const Schema = mongoose.Schema;

const ApiSchema = new Schema({

    shs_id:{
        type:String,
        required:true,
    },
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

// autoIncrement.initialize(mongoose.connection);
// ApiSchema.plugin(autoIncrement.plugin, {
//   model: "shsapi", // collection or table name in which you want to apply auto increment
//   field: "shs_id", // field of model which you want to auto increment
//   startAt: 1, // start your auto increment value from 1
//   incrementBy: 1, // incremented by 1
// });


const Shsapi= mongoose.model('Shsapi', ApiSchema)
module.exports = Shsapi;