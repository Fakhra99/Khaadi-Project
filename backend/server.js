const express=require('express');
const app=express(); 
const PORT=4041;
const connectDb = require('./config/connectDb');
const mainRoutes=require("./routes/index");
var bodyParser=require("body-parser")
const cors=require("cors")
connectDb();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors("*"));
app.use("/", mainRoutes)

app.listen(PORT, () => {
    
    console.log(`server listening on port ${PORT}`);
   
});