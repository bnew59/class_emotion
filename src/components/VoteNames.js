import React, { Component } from 'react';


export class VoteNames extends Component {
    constructor(props) {
        super(props)
    
        this.state = { 
          veryLostNames: [],
          sortOfGettingItNames: [],
          gettingItNames: []
        }
      }

      componentDidMount() {
        //calling functions for getting names
        this.populateVeryLostNames()
        this.populatesortOfGettingItNames()
        this.populategettingItNames()
        
      }

      //fetch from database all the names for each state - verylost
      populateVeryLostNames = () => {
        fetch ('http://localhost:5000/veryLostNames')
        .then((resp) => resp.json())
        .then((json) => {
            //console.log(json)
        this.setState({
            veryLostNames: json,
      })
    })
    }


      populatesortOfGettingItNames = () => {
        fetch ('http://localhost:5000/sortOfGettingItNames')
        .then((resp) => resp.json())
        .then((json) => {
            //console.log(json)
        this.setState({
            sortOfGettingItNames: json,
      })

    })
    }

    populategettingItNames = () => {
        fetch ('http://localhost:5000/gettingItNames')
        .then((resp) => resp.json())
        .then((json) => {
            //console.log(json)
        this.setState({
            gettingItNames: json,
      })

    })
    } 


  render() {

    let veryLostNamesList = this.state.veryLostNames.map((names, index) => {
        return (
            <div>
                <p>{names.first_name} {names.last_name} - {names.comments}</p>
            </div>
        )
    })

    let sortOfGettingItNamesList = this.state.sortOfGettingItNames.map((names, index) => {
        return (
            <div>
                <p>{names.first_name} {names.last_name} - {names.comments}</p>
            </div>
        )
    })

    let gettingItNamesList = this.state.gettingItNames.map((names, index) => {
        return (
            <div>
                <p>{names.first_name} {names.last_name} - {names.comments}</p>
            </div>
        )
    })

    return (
        <div>
            <div className= 'veryLostNameList'>
            <h3>Very Lost Names & Comments</h3>
            <p>{veryLostNamesList}</p>
            </div>

            <div className= 'sortOfGettingItNameList'>
            <h3>Sort Of Names & Comments</h3>
            <p>{sortOfGettingItNamesList}</p>
            </div>

            <div className= 'gettingItNameList'>
            <h3>Getting It Names & Comments</h3>
            <p>{gettingItNamesList}</p>
            </div>
        </div>
      
    )
  }

}

export default VoteNames;