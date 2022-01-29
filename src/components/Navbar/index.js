import React, { useState, useEffect } from 'react'
import NavIcons from '../NavIcons/index'
import {useRouter} from 'next/router';
import Logo from '../../assets/images/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiSearch} from 'react-icons/fi'
import NavBarSp from '../Navbar/NavBarSp'

const NavBar = () => {
    const router = useRouter();
    const size = useWindowSize()
    const [expandCustNavIcon,setExpandCustNavIcon] =useState(false)
    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
          width: undefined,
          height: undefined,
        });
        useEffect(() => {
            if (typeof window !== 'undefined') {
              function handleResize() {
                setWindowSize({
                  width: window.innerWidth,
                  height: window.innerHeight,
                });
              }
              window.addEventListener("resize", handleResize);
              handleResize();
              return () => window.removeEventListener("resize", handleResize);
            }
          }, []);

          return windowSize;
        
    }
    return (
        <div className='sideNav'>
            
            {size.width>=768?
            <div>
                <div id='navLogo'>
                <div  id='navLogoImg'>
                <Image src={Logo} alt='Logo'/>
                </div>
            </div>
             <div className='navIcons'>
             <ul>
             {router.pathname==='/dashboard'?
             <NavIcons className="navIcon-active" item="RiDashboardFill"/>:
             <Link href='/dashboard'><a><NavIcons item="RiDashboardFill"/></a></Link>
             }
             {router.pathname==='/leads'?
             <NavIcons className="navIcon-active" item="IoIosPeople"/>:
             <Link href='/leads'><a><NavIcons item="IoIosPeople"/></a></Link>
             }
             {router.pathname==='/staff'?
             <NavIcons className="navIcon-active" item="RiFileUserLine"/>:
             <Link href='/staff'><a><NavIcons item="RiFileUserLine"/></a></Link>
             }
             {router.pathname==='/customer'?
             <NavIcons  className="navIcon-active" item="FaUserPlus"/>:
             <Link href='/customer'><a><NavIcons item="FaUserPlus"/></a></Link>
             }
             {router.pathname==='/plans'?
             <NavIcons className="navIcon-active" item="RiCalendarCheckLine"/>
             :<Link href='/plans'><a><NavIcons item="RiCalendarCheckLine"/></a></Link>
             }
             {router.pathname==='/more'?<NavIcons className="navIcon-active" item="FiMoreHorizontal"/>
             :<Link href='/more'><a><NavIcons item="FiMoreHorizontal"/></a></Link>
             }
             <Link href='/faq'><a><li id="navBarFaq"><p>FAQ</p></li></a></Link>
             </ul>
         <p id="navBarFAQ">FAQ</p>
         </div>
         </div>
         :
         //sp view
        <NavBarSp/>
        }
           
        </div>
    )
}

export default NavBar;
