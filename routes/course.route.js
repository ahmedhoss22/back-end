const express = require('express');
const router = express.Router();

const {createCourse , showCourses , showCourse , updateCourse , deleteCourse} = require('../controller/course.control');

const upload = require('../services/upload')

router.post('/course/create',upload.single('image') ,createCourse);
router.get('/course/', showCourses);
router.get('/course/:id', showCourse);
router.put('/course/:id', updateCourse);
router.delete('/course/:id', deleteCourse);

module.exports = router;
