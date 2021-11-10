const express = require('express')
const cors = require('cors')  
const mongoose = require('mongoose')
var data = require('./data.json')
require('dotenv').config()

const app = express()
//Sets to port specified in .env, if it can not be reached use 8000 instead
const port = process.env.PORT || 8000

//middleware setup
app.use(cors())
app.use(express.json())


//setting up connection to db (specified in .env) using mongoose
const uri = process.env.DB_URI
mongoose.connect(uri, { useNewUrlParser: true})
const db= mongoose.connection;


//function for checking if collection exists
function getNumOfDocs(collectionName, callback){


    db.collection(collectionName).count({}, function(err, numOfDocs){
        if(err) return callback(err);

        
        callback(null, numOfDocs);
    });
}

//calling function
getNumOfDocs('carmodels', function(err, count) {
    if (err) {
        return console.log(err.message);
    }
    if(count == 0){ //if no collection exists new ones are created with given data from data.json file
        db.collection("carmodels").insertMany(data.carshop.carmodels, function(err, res) {
            if (err) throw err;
            console.log("Carmodels collection inserted with " + res.insertedCount + " documents");
        
        }); 
        db.collection("employees").insertMany(data.carshop.employees, function(err, res) {
            if (err) throw err;
            console.log("Employee collection inserted with " + res.insertedCount + " documents");
            
        }); 
        db.collection("sales").insertMany(data.carshop.sales, function(err, res) {
            if (err) throw err;
            console.log("Sales collection inserted with " + res.insertedCount + " documents");
           
        }); 
    }   
 }); 

 
//establish connection to database
db.once("open", () => {
  console.log("Database connected")
})

//getting the routes 
const carmodelsRouter = require("./routes/carmodels.route.js");
const employeesRouter = require("./routes/employees.route.js");
const total_salesRouter = require("./routes/total_sales.route.js");
const usersRouter = require("./routes/users.route.js");


//setting url's for coresponding to routes
app.use("/carmodels", carmodelsRouter);
app.use("/employees", employeesRouter);
app.use("/total_sales", total_salesRouter);
app.use('/users', usersRouter);

module.exports.get = function() {
    return db;
}
app.listen(port, () => {
    console.log(`Server runs on port ${port}`)
})