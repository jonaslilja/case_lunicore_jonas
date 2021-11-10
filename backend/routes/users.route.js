const router = require('express').Router()
let Users = require('../models/users.model')
//var crypto = require('crypto');
//const saltRounds = 10;
let database = require('../server.js');


//route for user sign up, result saved in collection "users" in db
router.route('/register').post((req, res) => {

 //var salt = crypto.randomBytes(16);
  const username = req.body.username
  const password = req.body.password 
  const email = req.body.email

  const newUser = new Users({
    username,
    password,
    email
  });
  
  newUser.save()
    .then(() => res.json(newUser))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
