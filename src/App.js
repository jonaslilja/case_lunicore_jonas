import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

//importerar alla components
import Navbar from "./components/navbar.component";
import Cars from "./components/cars.component";
import Employees from "./components/employees.component";
import SignUp from "./components/signup.component";
import AddCar from "./components/addcar.component";
import StartPage from './components/startPage.component'



export default function App() {
  return (
   
    <Router>
     <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<StartPage/>} />
        <Route path="/cars" exact element={<Cars/>} />
      
        <Route path="/addCar" element={<AddCar />} />
      
        <Route path="/employees" element={<Employees />}  />

        <Route path="/sign-up" element={<SignUp />}  />
      
      </Routes>
      </div>
    </Router>
  
  )
}





