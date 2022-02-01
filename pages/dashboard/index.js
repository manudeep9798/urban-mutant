import React, { useState , useEffect}from 'react'
import Header from '../../src/components/Header/Header'
import PieChart from '../../src/components/PieChart/PieChart'
import VerticalCards from '../../src/components/VerticalCards/verticalCards';
import StackedCards from '../../src/components/StackedCards/StackedCards';
const Index = () => {
  const [data1,setData1]=useState()
  const [data2,setData2]=useState()
  const [reportRange , setReportRange] =useState('daily');
  useEffect(() => {
    console.log(reportRange);
    setData2([
      20000, 90000,100000, 40000, 12000, 36000, 60000,20000, 90000,100000, 40000, 12000, 36000, 60000
    ])
    setData1([
      2000, 9000,10000, 4000, 30000, 56000, 60000,2000, 9000,10000, 4000, 30000, 56000, 60000
    ])
  }, [reportRange])
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

      const myData1 = [
        { x: "Income ", y: 900 },
        { x: "Balance ", y: 400 },
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
                <div className=" mainChart">
                        <h1>Income</h1>
                        <div className="divider"></div>
                        <PieChart data={myData1}/>                    
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
                {/* <div className="stackedCardContainer">
                    <StackedCards name="Monthly Report"/>
                    <StackedCards name="Weekly Report"/>
                    <StackedCards name="yearly Report"/>
                </div> */}
                <div className="reportContainer">
                  <div className=" spaceBetween flex">
                  <h1>Reports</h1>
                  <div className="rangeSelectors flex">
                      <p onClick={(e)=>setReportRange('daily')}>Daily</p>
                      <p>|</p>
                      <p onClick={(e)=>setReportRange('weekly')}>Weekly</p>
                      <p>|</p>
                      <p onClick={(e)=>setReportRange('monthly')}>Monthly</p>
                      <p>|</p>
                      <p onClick={(e)=>setReportRange('yearly')}>Yearly</p>
                  </div>
                  </div>
                  <div className="divider"></div>
                  <div className="stackedCardContainer">
                    <StackedCards data1={data1} data2={data2}name="Monthly Report"/>
                  </div>
                </div>
            </div>
            </>
        </div>
    )
}

export default Index
