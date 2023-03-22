const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
const User=require("../models/userModel.js");
const sendToken=require("../utils/jwtToken.js");




exports.registerUser= catchAsyncErrors(async(req,res,next)=>{


    const {name,email,password}=req.body;

    const user=await User.create({
        name,email,password
    }); 

    sendToken(user,201,res);

})


//login user
exports.loginUser=catchAsyncErrors(async(req,res,next)=>{
    const {email,password}=req.body;
    //checking if user has given password and email both
    
    
    if(!email || !password){
        return next(new ErrorHander("Please Enter Email or Password",400));
    }
    
    const user =await  User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHander("Please Enter Email or Password"));
    }

    const isPasswordMatched=await user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHander("Invalid email or password"));
    }

    // res.status(201).json({
    //     message:"successful",
    //     // token,
    // });
    sendToken(user,200,res);
 }); 
