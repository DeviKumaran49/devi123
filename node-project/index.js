console.log("welcome");
var a=10;
var b=20;
var c=a+b;
console.log(c);
const express=require("express");
const port=5000;
const app=express();
app.listen(port,()=>{
       console.log("Welcome azure");
})
app.get("/api?home",(req,res)=>{
    res.send("welcome API")
})
const dotenv=require("dotenv").config();
const ports=process.env.port||5000;
