const mongoose=require("mongoose");


const signupSchema=mongoose.Schema({
    Fname: {
        type: String,
        default: ""
        },
    Lname: {
        type: String,
        default: ""
        },
    email:{
        type:String,
        default:"",
    },
    password:{
        type:String,
        default:""
    }
})

module.exports=mongoose.model("signups", signupSchema)