import React, { Component } from 'react';
import { connect } from 'react-redux'

class FinanceButton extends Component {

  constructor(props) {
    super(props)

    // create the local state of the component
    this.state = {
      FinanceButton: 0
    }
  }

  incrementCounter = () => {

    // dispatch an action to set the global state
    this.props.onIncrementDispatch()

    this.setState({
      FinanceButton: this.state.FinanceButton + 1
    })  

  }

  render() {
    return (
    <div>
      <button onClick={this.incrementCounter}> Press Slowly For Full Refund</button>
      <h1>{this.state.FinanceButton}</h1>
    </div>

    )
  }

}

const mapStateToProps = (state) => {
  return {
    FinanceButton: state.FinanceButton
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementDispatch: () => dispatch({type: "FINANCEBUTTON_COUNTER"})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FinanceButton);
