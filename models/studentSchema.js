const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new mongoose.Schema({
    
    name : String,
    contact : Number,
    subjects : [String],
    class : Number,
    year : Number,
    
},
{strict: false},
Schema.Types.Mixed);

module.exports = mongoose.model("Student", studentSchema);