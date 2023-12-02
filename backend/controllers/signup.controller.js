// in controller we write logic how to recieve data how to get data, delete and update data
const Signup=require("../models/signup.model")

exports.store=async(req,res)=>{
    try{
        const payload=req.body;
        const signup=await Signup.create(payload)
        res.json({status:201,message:"signup Successfully",success:true,signup})

    }
    catch(err){
console.log(err)
    }
}

// write get api to get all contacts
exports.index=async(req,res)=>{
    try{
        const signups=await Signups.find()
        res.json({status:200, message:"account fetched successfully", success:true, signups})
    }
    catch(err){
        console.log(err);
    }
}

exports.index=async(req,res)=>{
    try{
        const signups=await Signup.find()
        res.json({status:200,message:"accounts Fetched Successfully",success:true,signups})

    }
    catch(err){
console.log(err)
    }
}

exports.get=async(req,res)=>{
    try{
        const {id}=req.params;
        const signup=await Signup.findOne({_id:id})
if(!signup){
    return res.json({status:404,message:"Couldn't find account",success:false})
}
    res.json({status:200,message:"account Fetched Successfully",success:true,signup})

    }
    catch(err){
        console.log(err)
    }
}

// exports.destroy=async(req,res)=>{
//     try{
// const {id}=req.params;
// const contact=await Contact.findOneAndDelete({_id:id})
// if(!contact){
//     return res.json({status:404,message:"Couldn't find contact",success:false})
// }
// res.json({status:200,message:"Contact deleted",success:true})
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// exports.update=async(req,res)=>{
//     try{
//         const {id}=req.params;
//         const payload=req.body;        
//         const contact=await Contact.findOneAndUpdate({_id:id},payload,{new:true})
//         if(!contact){
//             return res.json({status:404,message:"Contact not found",success:false})
//         }
//         res.json({status:200,message:"Contact updated",success:true,contact})
//     }
//     catch(err){
//         console.log(err)
//     }
   

//  }