const express = require('express');
const PORT = process.env.PORT || 3000;

const app  = express();

app.get("/",(req,res)=>{
    res.send("This is TechTalks portal");
})

app.get("/hello",(req, res)=>{
    res.send("Hello! Welcome to Techtalks world");
})

app.listen(PORT,()=>{
    console.log("Application lauched successfully");
})