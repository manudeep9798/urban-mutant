import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'//not to be deleted
import { Bar } from 'react-chartjs-2';
const myData =[
  20000, 90000,100000, 40000, 12000, 36000, 60000,20000, 90000,100000, 40000, 12000, 36000, 60000
]
const myData1 =[
  2000, 9000,10000, 4000, 30000, 56000, 60000,2000, 9000,10000, 4000, 30000, 56000, 60000
]
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
const data = {
    labels,
    datasets: [
      {
        label: 'Last Year',
        data:myData1,
        backgroundColor: '#86b6a0',
      },
      {
        label: 'This Year',
        data:myData,
        backgroundColor: '#14bb70',
      },
    ],
  };
const StackedCards = ({name="Monthly Report"}) => {
    return (
        <div className="stackedCards">
            <h5>{name}</h5>
            <div className="divider"></div>
            <Bar data={data} />
        </div>
    )
}

export default StackedCards
