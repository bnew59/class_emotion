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
import {Register} from './components/Register'
// import {Login} from './components/Login'
import BarChartComponent from './components/BarChartComponent';

const weekOne = {

  week: 1, veryLost: 12, sortOfGettingIt: 9, gettingIt: 1
}
const weekTwo = {
  week: 2, veryLost: 18, sortOfGettingIt: 10, gettingIt: 2
}
const weekThree = {
  week: 3, veryLost: 20, sortOfGettingIt:9, gettingIt: 1
}
const weekFour = {
  week: 4, veryLost: 25, sortOfGettingIt: 4, gettingIt: 1
}
var weeksData = [
  weekOne, weekTwo, weekThree, weekFour
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { charts: []}

    var renderedWeeks = []

    weeksData.forEach((week, index) => {
      console.log(index)
      var baseColors = [
        `rgba(255,0,0,1)`,
        `rgba(255,255,0,1)`,
        `rgba(0,255,0,1)`
     ]

      var rendered = <div>

        <BarChartComponent 
          backgroundColors={baseColors}
          weekNumber={week.week}
          veryLost={week.veryLost}
          sortOfGettingIt={week.sortOfGettingIt}
          gettingIt={week.gettingIt}
      
        
        />

      </div>

      renderedWeeks.push(rendered)

    })

    this.state.charts = renderedWeeks

  }

  render() {
    return (
      <div>
        <Register />
        <h1 className='ClassRoomEmotion'>Classroom Emotion Tracker</h1>
        <h2 className ='ClickTheButton'>Click The Button Below That Applies To You This Week...</h2>
        <VeryLost />
        <SortOfGettingIt />
        <GettingIt />

        {this.state.charts}

      </div>
    );
  }
  
}

export default App;
