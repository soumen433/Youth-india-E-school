const mongoose = require("mongoose");

const  userSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            require:true
        },

        lastName:{
            type:String,
            require:true
        },

        email:{
            type:String,
            reuire:true,
           
        },

        password:{
            type:String,
            require:true
        }
    }
);
module.exports = mongoose.model("userRegister", userSchema);