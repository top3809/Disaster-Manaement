const express=require("express");

const { registerUser,loginUser, logout} = require("../controllers/userController.js");
const { isAuthenticatedUser} = require("../middleware/auth");

const router=express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").get(logout);
router.route("/home").get(isAuthenticatedUser);

 
module.exports=router;   


 
 

