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



const showCourse = async (req,res)=>{
    try
    {
        const {id} = req.params
        const course = await CourseModel.findById(id);
        if(!course){
            res.status(404).json({message:`can not find any course with ID : ${id}`})
        }
        res.status(200).json({
            status : 200,
            data: course,
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

const updateCourse = async (req,res)=>{
    try
    {
        const {id} = req.params
        const course = await CourseModel.findByIdAndUpdate(id,req.body,{
            new:true,
            runValidators:true
        });
        if(!course){
            res.status(404).json({message:`can not find any course with ID : ${id}`})
        }
        res.status(200).json({
            status : 200,
            data: course,
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

const deleteCourse = async (req,res)=>{
    try
    {
        const {id} = req.params
        const course = await CourseModel.findByIdAndDelete(id);
        if(!course){
            res.status(404).json({message:`can not find any course with ID : ${id}`})
        }
        res.status(200).json({
            status : 200,
            data: course,
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

module.exports = {createCourse,showCourses,showCourse,updateCourse,deleteCourse};

