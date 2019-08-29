const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    name: String,
    job: String,
    phone: String,
    salary: Number
});

module.exports = mongoose.model('employee', EmployeeSchema);