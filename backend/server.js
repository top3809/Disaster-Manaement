require('dotenv').config('./')
const express=require('express');
const cookieParser=require("cookie-parser");
const { createadmin } = require('./admin/routes/createadmin.route');
const { loginroute } = require('./admin/routes/login.route');
const user  = require('./user/routes/user.js');


const {mains}=require('./admin/routes/main')
const db=require('./db/db');
const app=express();
app.use(express.json());
app.use(cookieParser());
app.use('/admin',loginroute)
app.use('/admin',createadmin)

app.use('/user',user)




let PORT=process.env.PORT||5000
app.listen(PORT,(e)=>{
    console.log('App listening at '+PORT)
})     