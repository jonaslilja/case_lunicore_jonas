import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
//creating navbar with click-able links to differnet components
  render() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
  
        <Link to={"/"} className="navbar-brand">CarShop</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">

          <li className="navbar-item">
            <Link to="/cars" className="nav-link">Cars</Link>
          </li>
          <li className="navbar-item">
            <Link to="/addcar" className="nav-link">Add car</Link>
          </li>
            <Link to="/employees" className="nav-link">Our Employees</Link>
        </ul>
        </div>
        <Link to={"/sign-up"} className="navbar-brand">sign-up</Link>
      </nav>
    )
  }
}
