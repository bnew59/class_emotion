import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
const SORT_OF_GETTING_IT = 'http://localhost:5000/SortOfGettingIt'

export class SortOfGettingIt extends Component {

  constructor(props) {
    super(props)

    // create the local state of the component
    this.state = {
      SortOfGettingIt: 0
    }
  }


  incrementCounter = () => {

    this.setState({
      counter: this.state.counter + 1
    })

    // dispatch an action to set the global state
    this.props.onIncrementDispatch()

    //let user = this.state.user
    
    axios.post(SORT_OF_GETTING_IT,{
      counter: this.state.counter
    })
    //.then((response))

  }

  

  render() {
    return (
    <div>
      <button className='SortOfButton' onClick={this.incrementCounter}> Sort Of Getting It</button>
      <h1 className='SortOfNumber' >{this.props.SortOfGettingIt}</h1>
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
