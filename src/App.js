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
      weekOne: [],
      weekTwo: [],
      weekThree: [],
      weekFour: [],
      veryLostCounter: 0
    }
  }

  componentDidMount() {
    this.populateWeekOneChart()
    
  }

    // var weeksData= []
    // var renderedWeeks = []

  populateWeekOneChart () {
    fetch ('http://localhost:5000/week_1')
    .then((resp) => resp.json())
    .then((json) => {

      this.setState({
        weekOne : [json]
      })
    })

    

  }
 

  render() {
    
    let weekOneChart = this.state.weekOne.map((week, index) => {
      console.log(week)
      
      var baseColors = [
        `rgba(255,0,0,1)`,
        `rgba(255,255,0,1)`,
        `rgba(0,255,0,1)`
      ]


    
      return (
        <div>
          <BarChartComponent 
          backgroundColors={baseColors}
          weekNumber={week[index].week_num}
          veryLost={week[index].very_lost}
          sortOfGettingIt={week[index].sort_of_getting_it}
          gettingIt={week[index].getting_it}
    
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
