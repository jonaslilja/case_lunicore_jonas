const router = require('express').Router();
let Employee = require('../models/employees.model');

//endpoint handling get request for employees. 
router.route('/').get((req, res) => { 
     Employee.find()
    .then(employees => res.json(employees)) //returning employees in json format
    .catch(err => res.status(400).json('Error: ' + err)); 
})


module.exports = router;