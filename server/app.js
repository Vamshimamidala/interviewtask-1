let express=require("express");
 
require("./dbconnection/dbconn")
 
let cors=require("cors");
const singupRouting = require("./router/Sigup");
const adminsingupRouting = require("./router/adminlogin");
const featureRouting = require("./router/featureRouter");
 
let app=express();
app.use(express.json());
app.use(cors())
app.use("/signup",singupRouting)
app.use("/adminsinup",adminsingupRouting)
app.use("/feature",featureRouting);
 
app.listen(4000,()=>{
    console.log("server started")
})