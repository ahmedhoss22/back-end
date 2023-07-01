const CourseModel = require('../model/course.model');

const createCourse = async (req,res) => {
    try
    {
        const course = new CourseModel(req.body);

        const result = await course.save();

        res.status(201).json({
            status : 201,
            message : 'Course created successfully',
            data: result,
        });
    }
    catch(error)
    {
        res.status(400).json({
            status : 400,
            message : error.message
        });
    }
}

const showCourses = async (req,res)=>{
    try
    {
        const courses = await CourseModel.find({});
        res.status(200).json({
            status : 200,
            data: courses,
        });
    }
    catch(error)
    {
        res.status(400).json({
            status : 400,
            message : error.message
        });        
    }
    
}

module.exports = {createCourse,showCourses};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const bcrypt=require('bcrypt')
// const User = require("../model/user")
// const validateSignupData = require("../validation/signupValidation")
// const middleware=require("../middlewares/middleware")
// const otp = require('../services/otp')
// const redis = require('redis');
// const mogoose=require('mongoose')
// const Reservation = require('../model/reservation')
// const db=mogoose.connection
// const collection = db.collection('otpCollection');

// const users={
//     signup:async (req,res)=>{
//         try {

//             let {name,password,phone,email}=req.body
//             let {errors,isValid}= validateSignupData(name,email,password,phone)
//             let uniqueEmail=await User.findOne({email})
//             if(uniqueEmail) return res.status(403).send({email:"Email address already taken"})

//             if(!isValid) return res.status(403).send(errors)

//             const user=new User(req.body)
//             await user.save()
//             .catch((err)=>{
//                 console.log(err.message);
//               //  if(Object.keys(err.keyValue)[0]=='phone')return res.status(403).send({phone:"Phone number is already taken"})
//                  if(Object.keys(err.keyValue)[0]=='email')return res.status(403).send({email:"Email address is already taken"})
//             })
//             res.sendStatus(201)
//         } catch (error) {
//             console.log(error.message);
//             res.status(400).send(error.message)
//         }
//     },
//     signin:async(req,res)=>{
//         try {
//             let {email,password}=req.body
//             let user=await User.findOne({ email })
//             if(!user) return res.status(404).send({phone:"Email address not found"})
//             if(!await bcrypt.compare(password,user.password)) return res.status(403).send({password:"Invalid Password"})
//             const token = await middleware.generateToken({user})
//             res.send({token})
//         } catch (error) {
//             console.log(error.message);
//             res.status(500).send({error:error.message})
//         }
//     },
//     addNews: async()=>{
//         try {
            
//         } catch (error) {
//             console.log(error.message);
//             res.status(500).send({error:error.message})
//         }
//     },
//     postCv:async ()=>{
//         try {
//             let id =req.user._id
//             let tempCv=await CSSMathValue.findOne({user_id:id})
//             if(tempCv){
//                 await CSSMathValue.findByIdAndUpdate(tempCv._id,req.body)
//                 .then(()=>res.send())
//                 .catch((err)=>res.status(400).send({message:err.message}))
//             }else{
//                 let cv = new Cv(req.body)
//                 cv.save()
//                 .then(()=>res.send())
//                 .catch((err)=>res.status(400).send({message:err.message}))
//             }
//         } catch (error) {
            
//         }
//     }
// }
// module.exports=users

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////