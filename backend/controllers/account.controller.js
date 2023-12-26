// in controller we write logic how to recieve data how to get data, delete and update data
import User from "../models/account.model.js";
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import Otp from '../models/otp.model.js';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

// export const signupUser=async(req,res)=>{
//     try{
//         const payload=req.body;
//         const signup=await Signup.create(payload)
//         return res.json({status:201,message:"signup Successfully",success:true,signup})
//     }
//     catch(err){
// console.log(err)
//     }
// }

// register
export const register = async (req, res) => {

    try {
        console.log("Called")
        const {Fname, Lname, email, password} = req.body
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(401).json({ message: "User Already exists" });
        }
        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = new User({Fname,Lname, email, password: hashPassword });
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//login
export const login = async (req, res) => {
    try {
        console.log("Called")
        const { email, password} = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not exists" })
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return res.status(401).json({ message: "Password not matched" })
        }
        console.log(user._id)
        const token = jsonwebtoken.sign({ userId: user._id}, process.env.PRIVATE_KEY, { expiresIn: "2hr" });
        res.status(200).json({ user, token });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// fetch all accounts
export const getAllContacts=async(req,res)=>{
    try{
        const signups=await User.find()
        res.json({status:200,message:"accounts Fetched Successfully",success:true,signups})

    }
    catch(err){
console.log(err)
    }
}

// fetch account
export const getSingleAccount=async(req,res)=>{
    try{
        const {id}=req.params;
        const signup = await User.findOne({ _id: id });
if(!signup){
    return res.json({status:404,message:"Couldn't find account",success:false})
}
    res.json({status:200,message:"account Fetched Successfully",success:true,signup})

    }
    catch(err){
        console.log(err)
    }
}

// delete
export const delAccount=async(req,res)=>{
    try{
const {id}=req.params;
const contact=await User.findOneAndDelete({_id:id})
if(!contact){
    return res.json({status:404,message:"Couldn't find contact",success:false})
}
res.json({status:200,message:"Contact deleted",success:true})
    }
    catch(err){
        console.log(err)
    }
}

// update
export const update=async(req,res)=>{
    try{
        const {id}=req.params;
        const payload=req.body;        
        const contact=await User.findOneAndUpdate({_id:id},payload,{new:true})
        if(!contact){
            return res.json({status:404,message:"Contact not found",success:false})
        }
        res.json({status:200,message:"Contact updated",success:true,contact})
    }
    catch(err){
        console.log(err)
    }
 }

 // forget password
export const forgetPassword = async (req, res) => {

  try {
    const { email } = req.body
    const user = await User.findOne({ email })

    if (user) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {

          user:"fakhrahnajeeb61@gmail.com",
            pass: "txbq fajz ubvh qcjx"
        }

      })
      const otp = crypto.randomBytes(3).toString('hex')
      const mailOptions = {
        from: "fakhrahnajeeb61@gmail.com",
        to: email,
        subject: "Password Reset OTP",
        text: `Your Otp is ${otp}`
      }

      transporter.sendMail(mailOptions)
      const otpSave = new Otp({
        email,
        otp
      })
      await otpSave.save()
      res.status(200).json({ message: "OTP Send Successfully" })
    }

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// verifyotp

export const verifyotp = async (req, res) => {
    try{
        const{email,otp,newPassword} = req.body
        const otpverify = await Otp.findOne ({otp})

        if(!otpverify){
            return res.status(400).json({message:"invalid otp"})
        }
        const hashPassword =await bcrypt.hash (newPassword, 10);
        await User.updateOne ({email}, {$set: {password:hashPassword} });
        await Otp.deleteOne({email})
        res.status(200).json({message:"password changed successfully"})
    }catch(error){
        res.status(501).json({message:error.message})
    }
}