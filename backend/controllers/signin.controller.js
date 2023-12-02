// in controller we write logic how to recieve data how to get data, delete and update data
const Signin=require("../models/signin.model")

exports.store=async(req,res)=>{
    try{
        const payload=req.body;
        const signin=await Signin.create(payload)
        res.json({status:201,message:"signin Successfully",success:true,signin})

    }
    catch(err){
console.log(err)
    }
}

// write get api to get all contacts
exports.index=async(req,res)=>{
    try{
        const signins=await Signins.find()
        res.json({status:200, message:"signin account fetched successfully", success:true, signins})
    }
    catch(err){
        console.log(err);
    }
}

exports.index=async(req,res)=>{
    try{
        const signins=await Signin.find()
        res.json({status:200,message:"accounts Fetched Successfully",success:true,signins})

    }
    catch(err){
console.log(err)
    }
}

exports.get=async(req,res)=>{
    try{
        const {id}=req.params;
        const signin=await Signin.findOne({_id:id})
if(!signin){
    return res.json({status:404,message:"Couldn't find signin account",success:false})
}
    res.json({status:200,message:"account Fetched Successfully",success:true,signin})

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