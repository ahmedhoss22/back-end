const fs = require("fs")
const CourseModel = require('../model/course.model');
const courseValidation = require('../validation/course.validate')
const logger = require('../config/logger')


const createCourse = async (req,res) => {
    try
    {
        const course = new CourseModel(req.body);

        if(req.file)
        {
            course.image = req.file.path
        }

        const result = await course.save();

        res.status(201).json({
            status : 201,
            message : 'Course created successfully',
            data: result,
        });
    }
    catch(error)
    {
        logger.error(error.message)
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
        logger.error(error.message)
        res.status(400).json({
            status : 400,
            message : error.message
        });        
    }
    
}

const showCourse = async (req,res)=>{
    try
    {
        const {id} = req.params
        const course = await CourseModel.findById(id);
        if(!course){
            res.status(404).json({message:`can not find any course with ID : ${id}`})
            logger.error(`can not find any course with ID : ${id}`)
        }
        res.status(200).json({
            status : 200,
            data: course,
        });
    }
    catch(error)
    {
        logger.error(error.message)
        res.status(400).json({
            status : 400,
            message : error.message
        });        
    }
    
}

const updateCourse = async (req,res)=>{
    try
    {
        const {id} = req.params
        const course = await CourseModel.findByIdAndUpdate(id,req.body,{
            new:true,
            runValidators:true
        });

        if(!course){
            logger.error(`can not find any course with ID : ${id}`)
            res.status(404).json({message:`can not find any course with ID : ${id}`})
        }
        if(req.file)
        {
            fs.unlinkSync(`${course.image}`)
            course.image = req.file.path
        }
        res.status(200).json({
            status : 200,
            data: course,
        });
    }
    catch(error)
    {
        logger.error(error.message)
        res.status(400).json({
            status : 400,
            message : error.message
        });        
    }
    
}

const deleteCourse = async (req,res)=>{
    try
    {
        const {id} = req.params
        const course = await CourseModel.findByIdAndDelete(id);
        if(!course){
            logger.error(error.message)
            res.status(404).json({message:`can not find any course with ID : ${id}`})
        }
        fs.unlinkSync(`${course.image}`)
        res.status(200).json({
            status : 200,
            data: course,
        });
    }
    catch(error)
    {
        logger.error(error.message)
        res.status(400).json({
            status : 400,
            message : error.message
        });        
    }
    
}

module.exports = {createCourse,showCourses,showCourse,updateCourse,deleteCourse};

