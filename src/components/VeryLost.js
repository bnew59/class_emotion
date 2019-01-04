import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
const VERY_LOST = 'http://localhost:5000/VeryLost'

export class VeryLost extends Component {

  constructor(props) {
    super(props)

    // create the local state of the component
    this.state = {
      counter : 0
    }

  }


  incrementCounter = () => {

    this.setState({
      counter: this.state.counter + 1
    })

    // dispatch an action to set the global state
    this.props.onIncrementDispatch()

    //let user = this.state.user
    
    axios.post(VERY_LOST,{
      counter: this.state.counter
    })
    //.then((response))

  }

  

  render() {
    return (
    <div>
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
