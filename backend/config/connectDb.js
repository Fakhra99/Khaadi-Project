const mongoose=require("mongoose")
const connectDb =async()=>{
    await mongoose.connect("mongodb+srv://fakhrapass122:newmongopass122@cluster0.5dlxc.mongodb.net/Khaadi") 
    //tset is name of table
    console.log("Database is connected");
}
module.exports=connectDb;