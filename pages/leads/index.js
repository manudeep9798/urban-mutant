import React from 'react'
import Header from '../../src/components/Header/Header'
import bannerImg from '../../src/assets/images/coming-soon-banner-template-illustration-260nw-1635914362.jpg'
const index = () => {
    return (
        <div className='leadsPage'>
            <Header/>
            <img id='commingSoonBanner' src={bannerImg.src}/>
        </div>
    )
}

export default index
