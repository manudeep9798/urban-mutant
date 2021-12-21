import React from 'react'
import {FiSearch} from 'react-icons/fi'

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="search" placeholder="Search By Email Phone Name "/>
            <span id="searchBarIconTopNavBar"><FiSearch/></span>
        </div>
    )
}

export default SearchBar
