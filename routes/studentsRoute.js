const express = require('express');
const Route = express.Router();
const Student = require('../models/student');

//  CREATE Student
Route.post('/', async (req, res) => {
    try {
        const data = req.body;
        // const newStudent = new Student(data);
        // const response = await newStudent.save(); // sirk ak student ka 
        const response = await Student.insertMany(data);

        console.log("Data Saved");
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "Not created properly" });
    }
});

//  GET ALL Students
Route.get('/', async (req, res) => {
    try {
        const data = await Student.find();
        console.log("Data retrieved");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal server error" });
    }
});

//  GET Student by ID
Route.get('/:id', async (req, res) => {
    try {
        const studentId = req.params.id;
        const student = await Student.findById(studentId);
        
        if (student) {
            res.status(200).json(student);
            console.log("Data retrieved by ID");
        } else {
            res.status(404).json({ msg: "Student not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal server error" });
    }
});

//  UPDATE Student by ID
Route.put('/:id', async (req, res) => {
    try {
        const studentId = req.params.id;
        const updatedStudent = req.body;

        const response = await Student.findByIdAndUpdate(studentId, updatedStudent, {
            new: true,
            runValidators: true
        });

        if (!response) {
            return res.status(404).json({ msg: "Student not found" });
        }

        console.log("Successfully updated");
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal server error" });
    }
});


Route.delete('/:rollnumber', async (req, res) => {
    try {
        const rollnum = req.params.rollnumber;

        const deletestudent = await Student.findOneAndDelete({ rollnumber: rollnum });

        if (!deletestudent) {
            return res.status(404).json({ msg: "Student not found" });
        }

        console.log("Successfully deleted");
        res.status(200).json({ msg: "Student deleted successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal server error" });
    }
});

module.exports = Route;
