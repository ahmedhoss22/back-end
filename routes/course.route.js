const express = require('express');
const router = express.Router();
const {createCourse , showCourses , showCourse , updateCourse , deleteCourse} = require('../controller/course.control');


router.post('/create', createCourse);
router.get('/', showCourses);
router.get('/:id', showCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

module.exports = router;

//////////////////////////////////////////////////////////////////////////////////////////////////////
// const express = require('express');
// const router = express.Router();
// const employee=require("../controller/employeeController");
// const middlware = require('../middlewares/middleware');

// // router.post('/signin',employee.signin)

// router.route('/example')
// .get(middlware.authorization,employee.getEmployees)
// .post(middlware.authorization,employee.addEmployee)

// router.delete('/example/:id',employee.deleteEmployee)
// router.post('/example/update',employee.updateEmployee)

// module.exports = router;

//////////////////////////////////////////////////////////////////////////////////////////////////////