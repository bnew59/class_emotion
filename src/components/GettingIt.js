import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
const GETTING_IT = 'http://localhost:5000/GettingIt'

export class GettingIt extends Component {

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
    
    axios.post(GETTING_IT,{
      counter: this.state.counter
    })
    //.then((response))

  }

  

  render() {
    return (
    <div>
      <button className='GettingItButton' onClick={this.incrementCounter}> Getting It</button>
      <h1 className='GettingItNumber' >{this.props.GettingIt}</h1>
    </div>

    )
  }
}


const mapStateToProps = (state) => {
  return {
    GettingIt: state.GettingIt
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementDispatch: () => dispatch({type: "GETTINGIT_COUNTER"})
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GettingIt);
