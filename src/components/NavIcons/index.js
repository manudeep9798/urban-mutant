import React, { useState } from 'react'
import {RiDashboardFill} from 'react-icons/ri'
import {FaUserPlus} from 'react-icons/fa'
import {RiFileUserLine} from 'react-icons/ri'
import {IoIosPeople} from 'react-icons/io'
import {RiCalendarCheckLine} from 'react-icons/ri'
import {FiMoreHorizontal} from 'react-icons/fi'
const NavIcons = ({item, className}) => {
    const selectComponent = (name) =>{
        if(name==="RiDashboardFill"){ return <RiDashboardFill/>}
        else if(name==="FaUserPlus")return <FaUserPlus/>
        else if(name==="RiFileUserLine")return <RiFileUserLine/>
        else if(name==="IoIosPeople")return <IoIosPeople/>
        else if(name==="RiCalendarCheckLine")return <RiCalendarCheckLine/>
        else if(name==="FiMoreHorizontal")return <FiMoreHorizontal/>
    }

    
    return (
        <div>
            <li className={className}>{selectComponent(item)}</li>
        </div>
    )
}

export default NavIcons
