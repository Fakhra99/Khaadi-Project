const express=require('express');
const app=express(); 
const PORT=4041;
const connectDb = require('./config/connectDb');
connectDb();

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
   
});