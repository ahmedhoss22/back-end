const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
        trim : true
    },
});


const UserModel = mongoose.model('users',userSchema);

const courseSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
        trim : true,
    },
    instructor:{
        type : String,
        required : true,
        trim : true
    },
    level:{
        type : Number,
        required : true,
        trim : true
    },
    numLessons:{
        type : Number,
        required : true,
        trim : true
    },
    language:{
        type : String,
        required : true,
        trim : true
    },
    startDate:{
        type : String,
        required : true,
        trim : true
    },
    duration:{
        type : Number,
        required : true,
        trim : true
    },
    certificate:{
        type : Boolean,
        default : false
    },
    intro:{
        type : String,
        required : true,
        trim : true
    },
    assessment:{
        type : String,
        required : true,
        trim : true
    },
    requirements:{
        type : String,
        required : true,
        trim : true
    },
    materials:{
        type : String,
        required : true,
        trim : true
    },
    publishDate:{
        type : String,
        required : true,
        trim : true,
    },
    image:{
        type : String,
        required : true,
        trim : true,
        default:'uploads/courses/default.png'
    },
    enroll:[
        {
            type : mongoose.Schema.Types.ObjectId,
            required : true,
            ref : "users"
        }
    ],
});

const CourseModel = mongoose.model('courses',courseSchema);



// module.exports = CourseModel;















































//////////////////////////////////////////////////////////////////////////////////////////////
// const mongoose=require('mongoose')
// const Schema=mongoose.Schema
// const bcrypt=require('bcrypt')

//   const adminSchema = new Schema({
//     name: { type: String, trim: true, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     nationalId: { type: Number, required: true ,unique:true},
//     phone: { type: Number, required: true },
//     salary: { type: Number, required: true },
//     enrolled: [{ type: Schema.Types.ObjectId, ref: 'user' }],
//     lessons: [{ type: Schema.Types.ObjectId, ref: 'lessons' }],
//     image:{type:String, default:"/course/image/ .png"},
//     admin: { type: Boolean ,default:false },
//   });
//   adminSchema.pre('save', async function(next) {
//     if (!this.isModified('password')) {
//       return next();
//     }
//     try {
//       const salt = await bcrypt.genSalt(10);
//       const hash = await bcrypt.hash(this.password, salt);
//       this.password = hash;
//       next();
//     } catch (error) {
//       return next(error);
//     }
//   });
// const Employee=mongoose.model('employee',adminSchema)


// const examSchema = new Schema({
//   name: { type: String, trim: true, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   nationalId: { type: Number, required: true ,unique:true},
//   phone: { type: Number, required: true },
//   salary: { type: Number, required: true },
//   enrolled: [{ type: Schema.Types.ObjectId, ref: 'user' }],
//   lessons: [{ type: Schema.Types.ObjectId, ref: 'lessons' }],
//   image:{type:String, default:"/course/image/ .png"},
//   admin: { type: Boolean ,default:false },
//   course_id:{type: Schema.Types.ObjectId, ref:"course" ,required:true},
//   user_id:{type: Schema.Types.ObjectId, ref:"user" ,required:true},
//   enrolled: [{
//     name:{type:String,trim:true,required:true},
//     phone:{type:String,trim:true,required:true},
//     level:{type:String,trim:true,required:true},
//   }],
// });




// module.exports=Employee



///////////////////////////////////////////////////////////