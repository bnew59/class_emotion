import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

const VERY_LOST = 'http://localhost:5000/VeryLost'

export class VeryLost extends Component {

  constructor(props) {
    super(props)

    // create the local state of the component
    this.state = {
      counter : true,
      user : {}
    }

  }

  postToDatabase = () => {
  

    fetch(VERY_LOST, {
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
      console.log(response)
      console.log("Response to posting to Very lost db")
    })

    console.log(this.state.user)
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
      <div className='voteContainerLost'>
        <div>
        <h2>Register Here If You Are Very Lost </h2>
        <div className= 'RegisterTextBoxVeryLost'>
        <input type="text" onChange={this.handleTextBoxChange} name="first_name" placeholder="First Name" />
        <input type="text" onChange={this.handleTextBoxChange} name="last_name" placeholder="Last Name" />
        <input type="text" onChange={this.handleTextBoxChange} name="comments" placeholder="Comments" />
      </div>
        <button className='LostButton' onClick={this.handleVoteChange}> Very Lost</button>
        </div>
      </div>

    )
  }
}



export default VeryLost;
