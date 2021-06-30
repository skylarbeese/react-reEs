import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './nav.css';
import {useWindowScroll} from 'react-use'
function Nav() {
  const[navFix, setNavFix] = useState(false)
  const {y: pageYOffset } = useWindowScroll()
  React.useEffect(() => {
    if(pageYOffset > 580) {
      setNavFix(true)
    
  
    } else {
      setNavFix(false)
     
    }
  }, [pageYOffset]) 
  console.log(navFix) 
  console.log(pageYOffset)
  return (
   <>
     <div className="nav-con">
        <div className={`nav ${navFix ? "nav-fixed": ""}`}>
            <div className="logo-nav">
                <h1><Link to="/">Logo</Link></h1>
            </div>
            <div className="nav-link">
                <ul>
                    <li><Link to="/comp/homes">Homes</Link></li>
                    <li><Link to="/comp/rental">Rentals</Link></li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>  
     </div>
   </>
  );
}

export default Nav;