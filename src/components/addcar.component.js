import React, { Component } from "react";
import axios from 'axios';

//skapar en funktional-react-component för att ta emot props och returnera jsx-kod


export default class Cars extends Component {
  constructor(props) {
    super(props);

    //binder .this så att den inte blir "undefined"

    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      id: "",
      brand: "",
      model: "",
      price: "",
      brandList: [],
    };
  }

  //called at start
  //send get req to server obtaning carmodels from database and add to brandList
  componentDidMount() {
    axios.get('http://localhost:5000/carmodels')
    .then(res =>{ 
            this.setState({
                brandList: res.data.map(car =>  car.brand),
            })
        
            this.setState({
                id: res.data.length + 1
            })
    })
    .catch((err) => {
        console.log(err)
    })
    
  }

  //itererar igenom listan cars, och returnerar (med hjälp av komponenten "Car") alla bilars parametrar
  

  

  onChangeBrand(e) {
    this.setState({
      brand: e.target.value
    });
  }

  onChangeModel(e) {
    this.setState({
      model: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }

  //berättar vad som skall hända när submit-knappen trycks
  onSubmit(e) {
    e.preventDefault();

    const newCar = {
        id : this.state.id,
        brand : this.state.brand,
        model : this.state.model,
        price : this.state.price,
    }
    
    console.log(newCar)

    //sending http request to backend endpoint using json format
    axios.post('http://localhost:5000/carmodels/add', newCar)
     .then(res => console.log(res.data))
  

    window.location = "/"; //Laddar om sidan efter submit
  }

  render() {
    return (
              <div>
                <h4>Add car model</h4>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                   


                   <label>Brand:</label>

                    <input list="brands"
                     type="text"
                     required
                     className="form-control"
                     value={this.state.brand}
                     onChange={this.onChangeBrand} 
                     /> 
                        {
                         <datalist id="brands">
                          {
                            this.state.brandList.map(function(brand) {
                            return <option key = {brand} value={brand}>{brand}</option>
                            })
                          }
                        </datalist>
                     }
                  </div>
                  <div className="form-group">
                  <label>Model: </label>
              <input
                type="text"
                required
                className="form-control"
                placeholder="Enter Model"
                value={this.state.model}
                onChange={this.onChangeModel}
               />
            </div>
            
                  <div className="form-group">
                  <label>Price: </label>
                    <input type="number"
                      required
                      className="form-control"
                      placeholder="Enter price"
                      value={this.state.price}
                      onChange={this.onChangePrice}
                    />
                  </div>
                  <input type="checkbox" 
                  required
                  />
                  <label for="agremeent">    I agree with user terms</label><br />
                  <div className="form-group">
                    <input type="submit" value="Add car" className="btn btn-primary" />
                  </div>
                  <div className="form-group"> </div>
                </form>
              </div>
            
          );
        }
}
