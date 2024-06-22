const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";
const addStudentQ = "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const DeleteStudentQ = "DELETE FROM students WHERE email = $1";
const getStudentId = 'Select s FROM students s WHERE s.id = $1'; 
const updateStudentNameQ = "UPDATE students SET name = $1 WHERE id = $2";


module.exports = {
    addStudentQ,
    checkEmailExists,
    DeleteStudentQ,
    getStudentId,
    updateStudentNameQ
}