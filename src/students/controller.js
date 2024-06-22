const pool = require('../../db.js')
const { addStudentQ, checkEmailExists, DeleteStudentQ, getStudentId,  updateStudentNameQ } = require('./queries.js')
 
const getStudents = (req, res) => {
    pool.query("SELECT * FROM students", (error, results) => {
        if(error) throw error
        
        res.status(200).json(results.rows)
    })
}

const addStudent = (req, res) => {
    const { name, email, age, dob } = req.body;

    pool.query(checkEmailExists, [email], (error, results) => {

        if(results?.rows.length !== 0){
            return res.status(201).json("Email already exists");
        }
        else{

            pool.query(addStudentQ, [name, email, age, dob], (error, results) => {
    
                if(error) throw error

                return res.status(201).json("Student added successfully")
                
            })
        }

    })
}

const deleteStudent = (req, res) => {

    const { name, email } = req.body;

    pool.query(DeleteStudentQ, [email, id], (error, results) => {

        if(error) throw error

        return res.status(200).json(`Student deleted:  ${name}`);

    })

}   


const updateStudentName = (req, res) => {
    
    const id = parseInt(req.params.id)
    const { name } = req.body

    pool.query(getStudentId, [id], (error, results) => {

        if(error) throw error

        if(results.rows.length === 0){
            return res.status(200).json("The Student was not found");
        }
        else{
            pool.query(updateStudentNameQ, [name, id], (error,  results) => {

                if(error) throw error
        
                res.status(200).json("Updated Successfully")
        
            })
        }

    })

    
    
}

module.exports = {
    getStudents,
    addStudent,
    deleteStudent,
    updateStudentName
}