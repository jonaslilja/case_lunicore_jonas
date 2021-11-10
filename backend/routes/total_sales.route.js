const router = require('express').Router();
const express = require('express')

const Sales = require('../models/sales.model')
const Employees = require('../models/employees.model')
const Carmodels = require('../models/carmodels.model');
const data = require("../data.json")
var database = require('../server.js');
const { db } = require('../models/carmodels.model');

//attempt to make total_sales 

function get_collection(collection, callback) {
    const db = database.get();
    db.collection(collection).find({"employee_id": 2}, function(err, doc) {
       callback(doc);
 });
}

router.route('/').get((req, res) => {
   
    get_collection('sales', function(err, doc) {
        if (err) {return console.log(err.message);
        }
         console.log(doc)
    
        }   
     ); 
            
      
})

router.route('/add').post((req, res) => {
    const id = Number(req.body.id)
    const employee_id = req.body.employee_id
    const carmodel_id = req.body.carmodel_id
  
    //creating new model using previous parameters
    const newSales = new Sales({
        id,
        employee_id,
        carmodel_id
    })
    //saves new carmodel and return it in json format
    newSales.save()
        .then(() => res.json(newSales))
        .catch(err => res.status(400).json('Error: ' + err))
      })



module.exports = router