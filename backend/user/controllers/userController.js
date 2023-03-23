const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
const User=require("../models/userModel.js");
const Event=require("../models/eventModel.js");
const sendToken=require("../utils/jwtToken.js");
const axios = require("axios");



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
        x:0,
        y:0
    };

    // google map location find

    const options = {
    method: 'GET',
    url: 'https://geocoding-by-api-ninjas.p.rapidapi.com/v1/geocoding',
    params: {city: location},
    headers: {
        'X-RapidAPI-Key': 'ce90579398msh557b7208b6385dcp1d9c10jsn369f8d27807e',
        'X-RapidAPI-Host': 'geocoding-by-api-ninjas.p.rapidapi.com'
    }
    };

    await axios.request(options).then(function (response) {
        let cordinate1={
            x:response.data[0].latitude,
            y:response.data[0].longitude
        }
        cordinate=cordinate1;
    }).catch(function (error) {
        return next(new ErrorHander("Can not get cordinate form adrdress"));
    });

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