import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
const SORT_OF_GETTING_IT = 'http://localhost:5000/SortOfGettingIt'

export class SortOfGettingIt extends Component {

  constructor(props) {
    super(props)

    // create the local state of the component
    this.state = {
      counter : true,
      user : {}
    }

  }

  postToDatabase = () => {

    let user = this.state.user
  

    fetch('http://localhost:5000/SortOfGettingIt', {
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
      <div>
        <h1>Register Here If You Are Sort Of Getting It</h1>
        <input type="text" onChange={this.handleTextBoxChange} name="first_name" placeholder="First Name" />
        <input type="text" onChange={this.handleTextBoxChange} name="last_name" placeholder="Last Name" />
        <input type="text" onChange={this.handleTextBoxChange} name="comments" placeholder="Comments" />

        <button className='SortOfButton' onClick={this.handleVoteChange}> Sort Of Getting It</button>
  
      </div>

    )
  }
}

export default SortOfGettingIt;
