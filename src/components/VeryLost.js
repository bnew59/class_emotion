import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
const VERY_LOST = 'http://localhost:5000/VeryLost'

export class VeryLost extends Component {

  constructor(props) {
    super(props)

    // create the local state of the component
    this.state = {
      counter : 0,
      user : {}
    }

  }


  incrementCounter = () => {

    this.setState({
      counter: this.state.counter + 1
    })

    // dispatch an action to set the global state
    this.props.onIncrementDispatch()

    let user = this.state.user
    
    axios.post(VERY_LOST,{
      counter: this.state.counter,
      first_name: user.first_name,
      last_name: user.last_name,
      week_num: user.week_num,
      comments: user.comments
    })
    .then((response) => {
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
        <h1>Register This Week's Emotion</h1>
        <input type="text" onChange={this.handleTextBoxChange} name="first_name" placeholder="First Name" />
        <input type="text" onChange={this.handleTextBoxChange} name="last_name" placeholder="Last Name" />
        <input type="text" onChange={this.handleTextBoxChange} name="week_num" placeholder="Week Number" />
        <input type="text" onChange={this.handleTextBoxChange} name="comments" placeholder="Comments" />

        <button className='LostButton' onClick={this.incrementCounter}> Very Lost</button>
        <h1 className='LostNumber' >{this.props.VeryLost}</h1>
      </div>

    )
  }
}


const mapStateToProps = (state) => {
  return {
    VeryLost: state.VeryLost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementDispatch: () => dispatch({type: "VERYLOST_COUNTER"})
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(VeryLost);
