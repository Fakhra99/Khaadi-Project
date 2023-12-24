import mongoose from "mongoose";

const signupSchema=mongoose.Schema({
    Fname: {
        type: String,
        },
    Lname: {
        type: String,
    
        },
    email:{
        type:String,
       
    },
    password:{
        type:String,
       
    }
})
const Signup = mongoose.model("signups", signupSchema);
export default Signup;