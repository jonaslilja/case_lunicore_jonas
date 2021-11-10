const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const salesSchema = new Schema({
  id: { type: Number, required: true, unique: true},
  employee_id: { type: Number, required: true},
  carmodel_id: { type: Number, required: true}
})

const Sales = mongoose.model("Sales", salesSchema);

module.exports = Sales;