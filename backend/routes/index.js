// index file includes all main routes
const express=require("express");
// call router
const router=express.Router();
// call signup route
const SignupRoute=require("./signup.route");
// call signin route
const SigninRoute=require("./signin.route")



// signup route 
router.use("/signup", SignupRoute)
// signin route
router.use("/signin", SigninRoute)

module.exports=router;