import React, { Component } from 'react';
import './App.css';
import VeryLost from './components/VeryLost'
import SortOfGettingIt from './components/SortOfGettingIt'
import GettingIt from './components/GettingIt'
import BarChartComponent from './components/BarChartComponent';
import { withRouter } from 'react-router'
import VoteNames from './components/VoteNames'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      veryLost: [],
      sortOfGettingIt: [],
      gettingIt: [],
      veryLostNames: [],
      sortOfGettingItNames: [],
      gettingItNames: []
    }
  }

  componentDidMount() {
    this.populateAllNames()
    this.populateWeekOneChartVeryLost()
    this.populateWeekOneChartSortOfGettingIt()
    this.populateWeekOneChartGettingIt()
  }

populateWeekOneChartVeryLost = () => {
  fetch ('http://localhost:5000/weekNumCountVeryLost')
  .then((resp) => resp.json())
  .then((json) => {
    this.setState({
        veryLost: json,
    })
  })
}




  populateWeekOneChartSortOfGettingIt = () => {
    fetch ('http://localhost:5000/weekNumCountSortOf')
    .then((resp) => resp.json())
    .then((json) => {
      this.setState({
          sortOfGettingIt: json
      })
    })
  }

  populateWeekOneChartGettingIt = () => {
    fetch ('http://localhost:5000/weekNumCountGettingIt')
    .then((resp) => resp.json())
    .then((json) => {
      this.setState({
          gettingIt: json
      })
    })
  }

  populateVeryLostNames = () => {
    fetch ('http://localhost:5000/veryLostNames')
    .then((resp) => resp.json())
    .then((json) => {

    this.setState({
        veryLostNames: json,
  }, ()=> {console.log(this.state.veryLostNames)})
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

populateAllNames = () => {
  console.log("Callback triggered")
  this.populateVeryLostNames()
  this.populatesortOfGettingItNames()
  this.populategettingItNames()
}
 

  render() {
  
  
  
    
    var baseColors = [
      `rgba(255,0,0,1)`,
      `rgba(255,255,0,1)`,
      `rgba(0,255,0,1)`
    ]

   
    let veryLostWeekOne = this.state.veryLost.length == 0 ? 0 : this.state.veryLost[0].count
    let sortOfGettingItWeekOne  = this.state.sortOfGettingIt.length == 0 ? 0 : this.state.sortOfGettingIt[0].count
    let gettingItWeekOne  = this.state.gettingIt.length == 0 ? 0 : this.state.gettingIt[0].count
    let weekNumberWeekOne  = 1


      return (
        <div>

        <h1 className='ClassRoomEmotion'>Classroom Emotion Tracker</h1>
        <h1 className ='FillInTheArea'>Fill In The Area That Applies To You This Week</h1>
       
          <div>

            <div>
              <VeryLost callback={this.populateWeekOneChartVeryLost} callback2={this.populateAllNames}/>
              <SortOfGettingIt callback={this.populateWeekOneChartSortOfGettingIt} callback2={this.populateAllNames}/>
              <GettingIt callback={this.populateWeekOneChartGettingIt} callback2={this.populateAllNames}/>
              <BarChartComponent 
              backgroundColors={baseColors}
              weekNumber={weekNumberWeekOne }
              veryLost={veryLostWeekOne }
              sortOfGettingIt={sortOfGettingItWeekOne }
              gettingIt={gettingItWeekOne } />
            </div>

            <VoteNames 
            veryLostNames={this.state.veryLostNames} 
            sortOfGettingItNames={this.state.sortOfGettingItNames}
            gettingItNames={this.state.gettingItNames}
            />



            
            


          </div>
        </div>
      )
    
 
  }
  
}

export default withRouter(App);


