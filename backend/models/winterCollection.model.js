import mongoose from "mongoose";

const wintercollectionSchema=mongoose.Schema({
    image: {
        type: String,
    },
    title: {
        type: String,
    
        },
    description:{
        type:String,
       
    },
    originalPrice:{
        type:Number,
    },
    discountedPrice:{
        type:Number,
    }
})
const Wintercollection = mongoose.model("WinterCollection", wintercollectionSchema);
export default Wintercollection;