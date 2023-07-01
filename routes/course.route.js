const express = require('express');
const router = express.Router();
const {createCourse , showCourses} = require('../controller/course.control');

router.get('/', showCourses);


router.post('/create', createCourse);

module.exports = router;






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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



// ///////////////////////////////////////////////////////////////////////////////////