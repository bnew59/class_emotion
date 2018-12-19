
import React, { Component } from 'react';
import axios from 'axios'

const REGISTER_USER_URL = 'http://localhost:3001/api/register'

export class Register extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user : {}
    }
  }

  registerButtonClick = () => {

    let user = this.state.user

    axios.post(REGISTER_USER_URL,{
      username: user.username,
      password: user.password
    }).then((response) => {
      console.log(response)
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
          <h1>Register</h1>
        <input type="text" onChange={this.handleTextBoxChange} name="username" placeholder="User Name" />
        <input type="text" onChange={this.handleTextBoxChange} name="password" placeholder="Password" />
        <button onClick={this.registerButtonClick}>Register</button>
      </div>
    )
  }

}
