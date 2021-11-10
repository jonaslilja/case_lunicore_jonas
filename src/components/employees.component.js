import React, { Component } from "react";
import axios from 'axios'

//functional component, takes in props and return jsx
const EmployeesItems = props => (
    <tr>
      <td>{props.employees.id}</td>
      <td>{props.employees.name}</td>
    </tr>
);

//class component
export default class Employees extends Component {
    constructor(props) {
        super(props)
        this.state = {employees: []}
    }

//sending http req getting res contaning all the cars in the database
    componentDidMount() {
        axios.get('http://localhost:5000/employees')
        .then(res => {
            this.setState({
                employees: res.data
            })   
        })
        .catch((err) => {
            console.log(err)
        })
    }

    employees() {
        return this.state.employees.map(employeeItem => {
            return <EmployeesItems employees={employeeItem}/>
        })
    }
 
    render() {
        return (
            <div>
            <h3>Our employees</h3>
            <table className="table">
            <thead className="thead-light">
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Sales</th>
                </tr>
            </thead>
            <tbody>
                { this.employees() }
            </tbody>
            </table>
        </div>
        )
    }
}