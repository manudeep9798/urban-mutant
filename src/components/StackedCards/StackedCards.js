import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'//not to be deleted
import { Bar } from 'react-chartjs-2';


const StackedCards = ({data1,data2}) => {
  console.log(data1);
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
        <div className="stackedCards">
            {/* <h5>{name}</h5> */}
            <div className="divider"></div>
            <Bar data={data} />
        </div>
    )
}

export default StackedCards
