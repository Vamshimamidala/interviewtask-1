let mongoose=require("mongoose")
let adminsingupSchema= new mongoose.Schema({
   name:{
       type:String,
       requied:true
   },
   phone:{
       type:Number,
       requied:true
   },
   email:{
       type:String,
       requied:true
   },
   password:{
       type:String,
       requied:true
   },
   address:{
       type:String,
       require:true
   }
})   
module.exports= mongoose.model("adminsingups",adminsingupSchema)