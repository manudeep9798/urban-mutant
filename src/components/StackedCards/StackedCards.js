import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'//not to be deleted
import { Bar } from 'react-chartjs-2';
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data:200,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data:200,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
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
