import React from 'react'
import {FiSearch} from 'react-icons/fi'

const SearchBar = () => {
    return (
        <div className="search-bar flex">
             <div className="serachBarDropDownSelector">
                <select className="serachBarDropDownSelector" name="All" id="All">
                <option value="all">All</option>
                <option value="name">Name</option>
                <option value="phone">Phone</option>
                <option value="email">Email</option>
                </select>
            </div>
            <div>
            <input type="search" placeholder="Search"/>
            <span id="searchBarIconTopNavBar"><FiSearch/></span>
            </div>

        </div>
    )
}

export default SearchBar
