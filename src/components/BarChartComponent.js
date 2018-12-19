import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';


export default class BarChartComponent extends Component
{
   constructor(props) {
      super(props);
      
      
    }
   render()
   {

    const {veryLost, sortOfGettingIt, gettingIt, weekNumber, backgroundColors } = this.props

    var labelsArray = ["Very Lost", "Sort of Getting it", "Getting It"]
    var valuesArray = [veryLost, sortOfGettingIt, gettingIt]

    const chartData = {
          labels: labelsArray,
          datasets:[
             {
                label: `Week ${weekNumber}`,
                data: valuesArray,
                backgroundColor: backgroundColors,
      
             }
          ]
       }
       var chartOptions = {
     
         scales: {
           yAxes: [{
               ticks: {
                   min: 0,
                   max: 30,
                   stepSize: 5    
               }
             }]
          },

          maintainAspectRatio: false
     }
    
      return(
         <div>
            <Bar data = {chartData} options={chartOptions}/>

         </div>
      )
      // 
   }
}