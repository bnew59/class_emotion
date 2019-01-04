
import React, { Component } from 'react';
import axios from 'axios'
//import { setAuthenticationToken } from '../utils'

const LOGIN_USER_URL = 'http://localhost:5000/login'

export class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user : {}
    }
  }

  loginButtonClick = () => {

    let user = this.state.user

    axios.post(LOGIN_USER_URL,{
      uid: user.uid,
      psw: user.psw
    }).then((response) => {
      window.alert("Logged In!");

      // save the token so we can access it later on
      // local storage
      localStorage.setItem('jsonwebtoken',response.data.token)
      // put the token in the request header
      //setAuthenticationToken(response.data.token)

    })

  }

  handleTextBoxChange = (e) => {

      this.setState({
        user : {
          ...this.state.user,
          [e.target.name] : e.target.value
        }
      })

  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <input type="text" onChange={this.handleTextBoxChange} name="uid" placeholder="User Name" />
        <input type="text" onChange={this.handleTextBoxChange} name="psw" placeholder="Password" />
        <button onClick={this.loginButtonClick}>Login</button>
      </div>
    )
  }

}
