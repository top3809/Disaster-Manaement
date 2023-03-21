const express=require('express');
const { createadmin } = require('./admin/routes/createadmin.route');
const { loginroute } = require('./admin/routes/login.route');
const {mains}=require('./admin/routes/main')
const db=require('./db/db');
const app=express();
require('dotenv').config('./')
app.use(express.json());
app.use('/admin',loginroute)
app.use('/admin',createadmin)
let PORT=process.env.PORT||5000
app.listen(PORT,(e)=>{
    console.log('App listening at '+PORT)
})