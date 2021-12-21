import React, {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiSearch} from 'react-icons/fi'
import {useRouter} from 'next/router';
import Link from 'next/link'
import {CSSTransition} from 'react-transition-group';

const NavBarSp = () => {
    const router = useRouter();
    const constants= require('../../constants/global.constants')
    const headingText= router.pathname.substring(1)
    const [menuExpanded, setMenuExpaned]=useState('hidden')
    const [searchExpanded, setSearchExpaned]=useState(false)
    const handleMenuExpansion = ()=>{
        if(menuExpanded==='hidden'){
            setMenuExpaned('spMenuExpanedEntry')
            setTimeout(()=>{
                setMenuExpaned('spMenuExpaned')
            },10)
        }else{
            setMenuExpaned('hidden')
        }
    }
    const handelSeacrhExpansionSPview=(e)=>{
        if(searchExpanded===false){
            setTimeout(()=>{
                setSearchExpaned(true)            
            },10)
            
        }else{
            setSearchExpaned(false)
        }
    }
    return (
        <CSSTransition
  in={true}
  timeout={950}
  classNames="display"
  unmountOnExit
>
        <div className="NavbarSpView">
            <div className="inActice">
                <div className="topNavContainer">
                    <span onClick={(e)=>handleMenuExpansion(e)} id="hamBurgerMenuIcon"><GiHamburgerMenu/></span>
                    <h3>{searchExpanded===false?constants.navBarHeadings[headingText]:null}</h3>
                    {searchExpanded===true?<><input type="text" name="search" placeholder={`Search`} className="searchInputExpanded"/></>:
                    null}
                    <span onClick={(e)=>handelSeacrhExpansionSPview(e)} id="searchBarIconSPView"><FiSearch/></span>
                </div>
           </div>
           <div className={menuExpanded}>
               <ul>
               <Link href='/dashboard'><a><div className="menuLinksSpview"><li>Dashboard</li></div></a></Link>
                   <Link href='/leads'><a><div className="menuLinksSpview"><li>Leads</li></div></a></Link>
                   <Link href='/staff'><a><div className="menuLinksSpview"><li>Staff</li></div></a></Link>
                   <Link href='/customer'><a><div className="menuLinksSpview"><li>Customers</li></div></a></Link>
                  <Link href='/plans'><a><div className="menuLinksSpview"><li>Plans</li></div></a></Link>
                   <Link href='/more'><a><div className="menuLinksSpview"><li>More...</li></div></a></Link>
                   <Link href='/faq'><a><div id="faqLinkSpView" className="menuLinksSpview"><li>FAQ</li></div></a></Link>
               </ul>
            </div>
        </div>
        </CSSTransition>
    )
}

export default NavBarSp
