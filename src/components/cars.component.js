import React, { Component } from "react";
import axios from 'axios'

//functional component, takes in props and return jsx
//uses button calling delete(id)-function declared below
const Car = props => (
    <tr>
      <td>{props.car.id}</td>
      <td>{props.car.brand}</td>
      <td>{props.car.model}</td>
      <td>{props.car.price}</td>
      <td>
       <b class="button" onClick={() => {
            props.deleteCar(props.car._id) }}>delete car</b> 
      </td>
    </tr>
  );

//class component
export default class Cars extends Component {

    constructor(props) {
        super(props)

        this.deleteCar = this.deleteCar.bind(this)

        this.state = {cars: []}
    }

//sending http req getting res contaning all the cars in the database
    componentDidMount() {
        axios.get('http://localhost:5000/carmodels')
        .then(res =>{
                this.setState({
                    cars: res.data
                })   
        })
        .catch((err) => {
            console.log(err)
        })
    }

    //removing car from the list using the delete endpoint
    deleteCar(id) {
        axios.delete('http://localhost:5000/carmodels/' +  id)
        .then(res => console.log(res.data))
        //updates state, only add to cars if _id does not match given id
        this.setState({
            cars: this.state.cars.filter(item => item._id !== id)
          })  
    }

    cars() {
        return this.state.cars.map(carItem => {
        return <Car car={carItem} deleteCar={this.deleteCar} key={carItem._id}/>;
        })
      }
 
  
  render() {
    return (
        <div>
        <h3>Available cars</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Id</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { this.cars() }
          </tbody>
        </table>
      </div>
    )
  }
}