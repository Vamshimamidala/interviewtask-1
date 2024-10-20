const express = require("express");
let Signup = require("../Modal/sigupModal");  
 

let signupRouting = express.Router();

signupRouting.post("/", async (req, res) => {
    let user = new Signup(req.body);
    let result = await user.save();
    res.send(result);
});

signupRouting.post("/login", async (req, res) => {
    let { email, password } = req.body;
    let exists = await Signup.findOne({ email:email });

    if (!exists) {
        res.send("User not found");
    } else if (exists.password !== password) {
        res.send("Invalid credentials");
    } else {
        
        res.send("Login successful");  
    }
});

 
module.exports = signupRouting;
