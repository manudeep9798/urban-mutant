import React from 'react'
import TopNav from '../TopNav/TopNav'
import NavBar from '../Navbar/index'
const Header = ({searchBar}) => {
    return (
        <div>
            <NavBar/>
            <TopNav searchBar={searchBar}/>
        </div>
    )
}

export default Header
