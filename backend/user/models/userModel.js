const mongoose=require("mongoose");
const validator=require("validator");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");



const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Your Name"],
        maxLength:[30,"Name cannot exceed 30 characters"],
        minLength:[4,"Name should have more than 4 characters"]
    },
    email:{
        type:String,
        required:[true,"Please Enter Your Email"],
        unique:true,
        validate:[validator.isEmail,"Please Enter a vaild Email"]
    },
    password:{
        type:String,
        required:[true,"Please Enter Your Password"],
        minLength:[8,"Password should be greater than 8 characters"],
        select:false, // hide 
    },
    role:{
        type:String, 
        default:"user"
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
});

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password=await bcrypt.hash(this.password,10);
    next();
})

//JWT TOKEN
userSchema.methods.getJWTToken=function() {
    return jwt.sign({id:this._id},process.env.jwt_key,{
        expiresIn: process.env.JWT_EXPIRE,
    })
}

// Compare password
userSchema.methods.comparePassword=async function(enteredPassword){

    return await bcrypt.compare(enteredPassword,this.password);
}
  


module.exports =mongoose.model("User",userSchema);