const express = require("express");
let Singup = require("../Modal/AdminModal");
const jwt = require('jsonwebtoken');
const middleware = require("../middleware");

let adminsingupRouting = express.Router();
adminsingupRouting.get("/", async(req,res)=>{
    let sigup = await   Singup.find();
    res.send(sigup)
   })
   adminsingupRouting.delete("/:id", async(req, res) => {
    let id=req.params.id;
    let sigup= await Singup.deleteOne({_id:id});
    res.send(sigup);
});
adminsingupRouting.post("/",async (req, res) => {
     let user =new Singup(req.body);
     let result= await user.save();
     res.send(result); 
     
});
adminsingupRouting.post("/login",async (req, res) => {
   let  {email,password}=req.body;
   let exists= await Singup.findOne({email:email});
  if(!exists){
     res.send("user not found")
  } 
  else if(exists.password!==password){
     res.send("IN valid")
  }
   else{
      let payload={
         user:{
            id: exists._id,
            email: exists._email,
         }
      };
      jwt.sign(payload,"vamshi@123",{expiresIn:36000},(err,token)=>{
         if(err) throw err;
         console.log(token);
         res.json({token})
        
         
      })
   }
})
adminsingupRouting.get("/adimdashboard",middleware,(req,res)=>{
   res.send("Welcome")
})
 
module.exports= adminsingupRouting;
