import React, { Component } from 'react';
import { connect } from 'react-redux'

class SortOfGettingIt extends Component {

  constructor(props) {
    super(props)

    // create the local state of the component
    this.state = {
      SortOfGettingIt: 0
    }
  }


  incrementCounter = () => {

    // dispatch an action to set the global state
    this.props.onIncrementDispatch()

    this.setState({
      SortOfGettingIt: this.state.SortOfGettingIt + 1
    })
    

  }

  render() {
    return (
    <div>
      <button className='SortOfButton' onClick={this.incrementCounter}> Sort Of Getting It!</button>
      <h1 className='SortOfNumber'>{this.state.SortOfGettingIt}</h1>
    </div>

    )
  }

}

const mapStateToProps = (state) => {
  return {
    SortOfGettingIt: state.SortOfGettingIt
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementDispatch: () => dispatch({type: "SORTOFGETTINGIT_COUNTER"})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SortOfGettingIt);
