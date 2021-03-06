import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
const GETTING_IT = 'http://localhost:5000/GettingIt'

export class GettingIt extends Component {

  constructor(props) {
    super(props)

    this.state = {
      counter : true,
      user : {}
    }

  }

  postToDatabase = () => {

    let user = this.state.user
  

    fetch('http://localhost:5000/GettingIt', {
      method: 'POST',
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        counter : this.state.counter,
        user: this.state.user
      })
    })
    .then(response => {
      this.props.callback()
      this.props.callback2()
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

  handleVoteChange = () => {
    this.setState({
      counter: this.state.counter
    },() => {
      this.postToDatabase()
    })

  }

  render() {
    return (
      <div className='voteContainerGettingIt'>
        <div>
        <h2>Register Here If You Are Getting It </h2>
        <div className= 'RegisterTextBoxVeryLost'>
        <input type="text" onChange={this.handleTextBoxChange} name="first_name" placeholder="First Name" />
        <input type="text" onChange={this.handleTextBoxChange} name="last_name" placeholder="Last Name" />
        <input type="text" onChange={this.handleTextBoxChange} name="comments" placeholder="Comments" />
      </div>
        <button className='GettingItButton' onClick={this.handleVoteChange}> Getting It</button>
        </div>
      </div>

    )
  }
}

export default GettingIt;
