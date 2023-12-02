const mongoose=require("mongoose");

const signinSchema=mongoose.Schema({
    email:{
        type:String,
        default:""
    },

    password:{
        type:String,
        default:""
    }
})

module.exports=mongoose.model("signins", signinSchema)