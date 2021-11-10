import React, { Component } from "react";
import axios from 'axios'


export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = { //inital state of user
      username: "",
      password: "",
      email: ""
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }
    console.log(newUser)

    //sending http request to backend endpoint using json format
    axios.post('http://localhost:5000/users/register', newUser)
    .then(res => console.log(res.data))
    .catch((err) => {
      console.log(err)
    })
    console.log('User registred')
    window.location = "/";
  }

  render() {
    return (
      <div>
      <h3>Register</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}/>
        </div>
        <div className="form-group"> 
          <label>Password: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}/>
        </div>
        <div className="form-group"> 
          <label>Email: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
          </div>
          <div> 
            <input type="checkbox"
              required
              />
            <label for="agremeent">    I agree with user terms</label><br />
            </div>
            <div className="form-group"></div>
            <input type="submit" value="Create Account" className="btn btn-primary" />
            <div className="form-group">
          </div>
      </form>
    </div>
    )
  }
}