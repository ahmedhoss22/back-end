const express = require('express');
const router = express.Router();

const {createCourse , showCourses , showCourse , updateCourse , deleteCourse} = require('../controller/course.control');


router.post('/create', createCourse);
router.get('/', showCourses);
router.get('/:id', showCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);
router.all('*', (req,res) => {
    logger.error("This Route is not defined")
        res.status(404).json({
            status : 404,
            message : error.message
        });
});
module.exports = router;
