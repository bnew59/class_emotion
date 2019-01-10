import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import ClassInput from './components/ClassInput'
// import {ClassChart} from './components/ClassChart'
import VeryLost from './components/VeryLost'
import SortOfGettingIt from './components/SortOfGettingIt'
import GettingIt from './components/GettingIt'
// import FinanceButton from './components/FinanceButton'
// simport Checkout from './Checkout'
//import {Register} from './components/Register'
// import {Login} from './components/Login'
import BarChartComponent from './components/BarChartComponent';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
        veryLost: [],
        sortOfGettingIt: [],
        gettingIt: [],
    }
  }

  componentDidMount() {
    this.populateWeekOneChartVeryLost()
    this.populateWeekOneChartSortOfGettingIt()
    this.populateWeekOneChartGettingIt()
    
  }

    // var weeksData= []
    // var renderedWeeks = []

  populateWeekOneChartVeryLost () {
    fetch ('http://localhost:5000/weekNumCountVeryLost')
    .then((resp) => resp.json())
    .then((json) => {
      this.setState({
          veryLost: json,
      })
    })
  }



  populateWeekOneChartSortOfGettingIt () {
    fetch ('http://localhost:5000/weekNumCountSortOf')
    .then((resp) => resp.json())
    .then((json) => {
      console.log(json)
      this.setState({
        
          sortOfGettingIt: json
      })
    })
  }

  populateWeekOneChartGettingIt () {
    fetch ('http://localhost:5000/weekNumCountGettingIt')
    .then((resp) => resp.json())
    .then((json) => {
      this.setState({
          gettingIt: json
      })
    })
  }
 

  render() {
    
    let counts = []

    let weekOneChartVeryLost = this.state.veryLost.map((week, index) => {
      counts.push(week)
    })

    let weekOneChartSortOf = this.state.sortOfGettingIt.map((week, index) => {
      counts.push(week)
    })

    let weekOneChartGettingIt = this.state.gettingIt.map((week, index) => {
      counts.push(week)
    })
  
    // console.log(counts)

    // console.log(this.state.veryLost)
    
    var baseColors = [
      `rgba(255,0,0,1)`,
      `rgba(255,255,0,1)`,
      `rgba(0,255,0,1)`
    ]

    let veryLostWeekOne = this.state.veryLost.length == 0 ? 0 : this.state.veryLost[0].count 
    let sortOfGettingItWeekOne  = this.state.sortOfGettingIt.length == 0 ? 0 : this.state.sortOfGettingIt[0].count 
    let gettingItWeekOne  = this.state.gettingIt.length == 0 ? 0 : this.state.gettingIt[0].count
    let weekNumberWeekOne  = this.state.veryLost.length == 0 ? 0 : this.state.veryLost[0].week_num

    let veryLostWeekTwo = this.state.veryLost.length == 0 ? 0 : this.state.veryLost[1].count 
    let sortOfGettingItWeekTwo = this.state.sortOfGettingIt.length == 0 ? 0 : this.state.sortOfGettingIt[1].count 
    let gettingItWeekTwo = this.state.gettingIt.length == 0 ? 0 : this.state.gettingIt[1].count
    let weekNumberWeekTwo = this.state.veryLost.length == 0 ? 0 : this.state.veryLost[1].week_num


      return (
        <div>

        <h1 className='ClassRoomEmotion'>Classroom Emotion Tracker</h1>
        <h2 className ='ClickTheButton'>Fill In The Row That Applies To You This Week...</h2>
       
          <div>

            <div>
              <VeryLost />
              <SortOfGettingIt />
              <GettingIt />
              <BarChartComponent 
              backgroundColors={baseColors}
              weekNumber={weekNumberWeekOne }
              veryLost={veryLostWeekOne }
              sortOfGettingIt={sortOfGettingItWeekOne }
              gettingIt={gettingItWeekOne } />
            </div>
            <div>
              <BarChartComponent 
              backgroundColors={baseColors}
              weekNumber={weekNumberWeekTwo}
              veryLost={veryLostWeekTwo}
              sortOfGettingIt={sortOfGettingItWeekTwo}
              gettingIt={gettingItWeekTwo} />
            </div>

          </div>
        </div>
      )
    // })
    
 
  }
  
}

export default App;
