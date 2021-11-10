const mongoose = require('mongoose')

const Schema = mongoose.Schema;

//creating schema (blueprint) for carmodels
const carmodelsSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    brand: { type: String, required: true, trim: true},
    model: { type: String, required: true, trim: true},
    price: { type: Number, required: true, trim: true}
  })
  
  const Carmodels = mongoose.model("Carmodels", carmodelsSchema);
  
  module.exports = Carmodels;