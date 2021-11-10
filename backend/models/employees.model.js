const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//creating schema for employee
const employeesSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true, trim: true},
  sales: {type: Number, required: false}
})

const Employees = mongoose.model("Employees", employeesSchema);

module.exports = Employees;