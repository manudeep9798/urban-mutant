import React from 'react'
import SearchBar from '../SerachBar/index'
import {useRouter} from 'next/router'
import {FaCartArrowDown} from 'react-icons/fa'
import {FaHistory} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'

const TopNav = () => {
    
    const router = useRouter();
    const constants= require('../../constants/global.constants')
    const headingText= router.pathname.substring(1)
    return (
        <div className="TopNav">
            <h2 className="topNavHeadingText">{constants.navBarHeadings[headingText]}</h2>
            <div className="serachBarDropDownSelector">
                <select className="serachBarDropDownSelector" name="All" id="All">
                <option value="all">All</option>
                <option value="name">Name</option>
                <option value="phone">Phone</option>
                <option value="email">Email</option>
                </select>
            </div>
            <span className="search-bar"><SearchBar/></span>
            <div className="profileCartIconContainer">
            <span className="cartIconTopNav"><FaCartArrowDown/></span>
            <span className="historyIconTopNav"><FaHistory/></span>
            <span className="profileIconTopNav"><CgProfile/></span>
        </div>
        </div>
    )
}

export default TopNav
