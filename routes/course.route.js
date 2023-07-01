const express = require('express');
const router = express.Router();

const {createCourse , showCourses , showCourse , updateCourse , deleteCourse} = require('../controller/course.control');


router.post('/create', createCourse);
router.get('/', showCourses);
router.get('/:id', showCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

module.exports = router;
