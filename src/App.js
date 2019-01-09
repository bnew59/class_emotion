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
    fetch ('http://localhost:5000/week_1_verylost')
    .then((resp) => resp.json())
    .then((json) => {
      this.setState({
          veryLost: json
      })
    })
  }

  populateWeekOneChartSortOfGettingIt () {
    fetch ('http://localhost:5000/week_1_sortofgettingit')
    .then((resp) => resp.json())
    .then((json) => {
      this.setState({
          sortOfGettingIt: json
      })
    })
  }

  populateWeekOneChartGettingIt () {
    fetch ('http://localhost:5000/week_1_gettingit')
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
  
    console.log(counts)
    
    let weekOneChart = counts.map((vote, index) => {
      console.log(vote)
      var baseColors = [
        `rgba(255,0,0,1)`,
        `rgba(255,255,0,1)`,
        `rgba(0,255,0,1)`
      ]

      return (
          <div>
            <BarChartComponent 
            backgroundColors={baseColors}
            weekNumber={1}
            veryLost={vote.count}
            sortOfGettingIt={vote.count}
            gettingIt={vote.count}
            />
          </div>

      )
    })
    
    
    return (
      <div>
        
        <h1 className='ClassRoomEmotion'>Classroom Emotion Tracker</h1>
        <h2 className ='ClickTheButton'>Fill In The Row That Applies To You This Week...</h2>
        <VeryLost />
        <SortOfGettingIt />
        <GettingIt />

        {weekOneChart}


      </div>
    );
  }
  
}

export default App;
