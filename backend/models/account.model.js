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
  
    },
   role: {
    type: String,
    default: 'customer',
    enum: ["admin", "customer"]
}

})
const Signup = mongoose.model("signups", signupSchema);
export default Signup;