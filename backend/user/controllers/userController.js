const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
const User=require("../models/userModel.js");
const Event=require("../models/eventModel.js");
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


 //Logout User
exports.logout=catchAsyncErrors(async(req,res,next)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,
    });
    
    res.status(200).json({
        success:true,
        message:"Logged Out",
    })
});


// Create new Event 
exports.createEvent=catchAsyncErrors(async(req,res,next)=>{
    const {
        location,
        subject,
        radius,
        type,
        discrption,
        images,
    }= req.body;

    let cordinate={
        x:2,
        y:4
    };
    
    // var url = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + location ;
    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => addressArr = data)
    //     .then(show => showAddress())
    //     .catch(err => console.log(err))    

    const event=await Event.create({
        location,
        subject,
        cordinate,
        radius,
        type,
        discrption,
        images,
        createdAt:Date.now(),
        user:req.user._id,
    })

    res.status(201).json({
        success:true,
        event
    })

});