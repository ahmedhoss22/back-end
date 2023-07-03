require('dotenv').config();
const express=require('express');
const app=express();
const port =process.env.PORT || 5000
const dbconn=require('./config/dbConn')
const mongoose=require('mongoose')
const router=require('./routes/root')
const multer=require('multer')

dbconn()
app.use(express.json());
app.use('/',require('./routes/root'))
app.use(router);
mongoose.connection.once("open", () => {
    console.log("connected to db successfully");
    app.listen(port,()=>{console.log(`server running on port ${port}`)})
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
