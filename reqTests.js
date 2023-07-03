const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    enroll: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
});

const CourseModel = mongoose.model('Course', courseSchema);


const createCourse = async (req, res) => {
    try {
        const instructor = req.user.id
        const newCourse = new CourseModel({ ...req.body, instructor });
        await newCourse.save()
        res.status(200).json(newCourse);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};
module.exports = {
    CourseModel
};