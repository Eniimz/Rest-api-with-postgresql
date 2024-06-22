const { Router } = require("express");
const { getStudents, addStudent, deleteStudent, updateStudentName } = require('./controller.js')

const router = Router();

router.get('/', getStudents);
router.post('/add', addStudent);
router.delete('/delete', deleteStudent);
router.put('/update/:id', updateStudentName);

module.exports = router;