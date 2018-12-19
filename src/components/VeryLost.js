import React, { Component } from 'react';
import { connect } from 'react-redux'

class VeryLost extends Component {

  constructor(props) {
    super(props)

    // create the local state of the component
    
  }


  incrementCounter = () => {

    // dispatch an action to set the global state
    this.props.onIncrementDispatch()

    // this.setState({
    //   VeryLost: this.state.VeryLost + 1
    // })
    

  }

  decrementCounter = () => {

    this.props.onDecrementDispatch() 
    

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
