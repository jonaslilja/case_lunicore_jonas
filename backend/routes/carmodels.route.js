const router = require('express').Router()
let Carmodels = require('../models/carmodels.model')

//endpoint handling htttp get request. Getting a list of all carmodels in json format
router.route('/').get((req, res) => {
    Carmodels.find() //findning carmodels from db
      .then(carmodels => res.json(carmodels)) //returns carmodels json format
      .catch(err => res.status(400).json('Error: ' + err));
  })

//endpoint handling post request. Creates new carmodel and returns it
//mapping body of req to new model
router.route('/add').post((req, res) => {
const id = Number(req.body.id)
const brand = req.body.brand
const model = req.body.model
const price = Number(req.body.price)

//creating new model using above parameters
const newCarmodel = new Carmodels({
    id,
    brand,
    model,
    price
})

//saves new carmodel and return it in json format
newCarmodel.save()
    .then(() => res.json(newCarmodel))
    .catch(err => res.status(400).json('Error: ' + err))
  })

//finding car by unique id, then returns it in a res and deletes it afterward
router.route("/:id").delete((req, res) => {
  Carmodels.findByIdAndDelete(req.params.id)
    .then(carmodels => res.json(carmodels))
    .catch(err => res.status(400).json("Error: " + err)
)
})

module.exports = router