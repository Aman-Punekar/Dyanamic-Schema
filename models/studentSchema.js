/*
Create a student schema with name, contact,subjects, class, society, year in mongo, such that : 
1. each student can have multiple subjects and can be in a single class 
2. Each student can be part of  multiple or none societies
*/

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    
    name : String,
    contact : Number,
    Subjects : [String],
    class : Number,
    year : Number,
},
{strict: false});

module.exports = mongoose.model("Student", studentSchema);