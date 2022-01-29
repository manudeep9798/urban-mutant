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
                    <div className="mainChart">
                    <h1>AIL Ratios</h1>
                    <div className="divider"></div>
                    <PieChart data={myData}/>
                    </div>
                    <div className="recomendedProducts">
                        <h1>Recomended Products</h1>
                        <div className="divider"></div>
                        <div className="recomendedProductsOverFlow">
                        {RecomendedProducts.map(product=>{
                            return(
                                <div key={product.price} className="recomendedCard flex">
                                    <img src='https://thumbs.dreamstime.com/z/gym-24699087.jpg'/>
                                    <div>
                                    <p>yearly</p>
                                    <p>12000</p>
                                    </div>
                                </div>
                            )
                        })}
                        </div>

                        
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
