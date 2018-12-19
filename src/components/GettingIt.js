import React, { Component } from 'react';
import { connect } from 'react-redux'

class GettingIt extends Component {

  constructor(props) {
    super(props)

    // create the local state of the component
    this.state = {
      GettingIt: 0
    }
  }


  incrementCounter = () => {

    // dispatch an action to set the global state
    this.props.onIncrementDispatch()

    this.setState({
      GettingIt: this.state.GettingIt + 1
    })
    

  }

  decrementCounter = () => {

    this.props.onDecrementDispatch() 
    

  }

  render() {
    return (
    <div>
      <button className='GettingItButton' onClick={this.incrementCounter}> Getting It!</button>
      <h1 className='GettingItNumber' >{this.state.GettingIt}</h1>
    </div>

    )
  }

}

const mapStateToProps = (state) => {
  return {
    passengerCount: state.noOfPassengers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementDispatch: () => dispatch({type: "GETTINGIT_COUNTER"})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GettingIt);
