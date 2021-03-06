import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'//not to be deleted
import { Bar } from 'react-chartjs-2';


const StackedCards = ({data1,data2}) => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
const data = {
    labels,
    datasets: [
      {
        label: 'Last Year',
        data:data1,
        backgroundColor: '#86b6a0',
      },
      {
        label: 'This Year',
        data:data2,
        backgroundColor: '#14bb70',
      },
    ],
  };
    return (
            <Bar data={data} />
    )
}

export default StackedCards
