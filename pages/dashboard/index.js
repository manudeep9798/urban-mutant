import React from 'react'
import Header from '../../src/components/Header/Header'
import PieChart from '../../src/components/PieChart/PieChart'
import VerticalCards from '../../src/components/VerticalCards/verticalCards';
import StackedCards from '../../src/components/StackedCards/StackedCards';

const index = () => {
    const myData = [
        { x: "Active", y: 900 },
        { x: "In-Active", y: 400 },
        { x: "Leads", y: 300 },
      ];
    return (
        <div className="dashboard">
            <Header/>
            <>
            <div className="pageComponent">
                <div className="mainChart">
                <h1>AIL Ratios</h1>
                <div className="divider"></div>
                <PieChart data={myData}/>
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
