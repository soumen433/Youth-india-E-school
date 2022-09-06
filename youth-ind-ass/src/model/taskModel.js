const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
 const taskSchema= new mongoose.Schema(
    {
       userId:{
        type:ObjectId,
        ref:"userRegister",
        require:true
       } ,

       taskStatus:{
        type:Boolean,
        default:true
       },

       taskDay:{
        type:String,
       },
       taskWeek:{
        type:Number,
       },

       taskMonth:{
        type:String,
       },
       isDeleted:{
        type:Boolean,
        default:false
       }
    }
 );
 module.exports = mongoose.model("task", taskSchema);