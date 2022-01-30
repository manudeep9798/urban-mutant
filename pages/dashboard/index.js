import React from 'react'
import Header from '../../src/components/Header/Header'
import PieChart from '../../src/components/PieChart/PieChart'
import VerticalCards from '../../src/components/VerticalCards/verticalCards';
import StackedCards from '../../src/components/StackedCards/StackedCards';
import {Doughnut} from 'react-chartjs-2'
const index = () => {
    
    const data = {
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      };
  const piedata = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
    const config = {
        type: 'doughnut',
        data: piedata,
      };
    const myData = [
        { x: "Active", y: 900 },
        { x: "In-Active", y: 400 },
        { x: "Leads", y: 300 },
      ];

      const RecomendedProducts = [{
          name:'Yearly',
          Price: '12000',
          img: 'https://thumbs.dreamstime.com/z/gym-24699087.jpg'
      },{
        name:'6 Months',
        Price: '7000',
        img: 'https://thumbs.dreamstime.com/z/gym-24699087.jpg'
    },{
        name:'3 Months',
        Price: '5000',
        img: 'https://thumbs.dreamstime.com/z/gym-24699087.jpg'
    },{
        name:'Monthly',
        Price: '2000',
        img: 'https://thumbs.dreamstime.com/z/gym-24699087.jpg'
    },
    ]
    return (
        <div className="dashboard">
            <Header/>
            <>
            <div className="pageComponent">
                <div className="flex">
                    <div className="IncomeChart">
                    <h1>Income</h1>
                    <div className="divider"></div>
                    <div className="doughnutChart">
                    <Doughnut data={data}
                    config={config}/>
                    </div>
                    </div>
                    <div className=" mainChart">
                        <h1>AIL Ratio</h1>
                        <div className="divider"></div>
                        <PieChart data={myData}/>                    
                    </div>
                </div>
                
                <div className="bannerCards">
                    <VerticalCards name="Total Staff" value={4}/>
                    <VerticalCards name="Total Customer" value={126}/>
                    <VerticalCards name="Total Income" value={300000}/>
                </div>
                <div className="stackedCardContainer">
                    <StackedCards name="Monthly Report"/>
                    <StackedCards name="Weekly Report"/>
                    <StackedCards name="yearly Report"/>
                </div>
            </div>
            </>
        </div>
    )
}

export default index
