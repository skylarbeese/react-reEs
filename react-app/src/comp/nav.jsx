import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './nav.css';
import {useWindowScroll} from 'react-use'
function Nav() {
  const[navFix, setNavFix] = useState(false)
  const[mobile, setMobile] = useState(false)
  const[navDrop, setNavDrop] = useState(false)
  const {y: pageYOffset } = useWindowScroll()

 const navHandler = () => {
   setNavDrop(!navDrop)
 }
 console.log(navDrop)
 const hand = () => {
  let lastScroll = window.innerWidth;
    if(window.innerWidth > 480) {
      console.log('true')
      setMobile(true)
    } else {
      setMobile(false)
    }
    console.log(lastScroll)
  }
  console.log(mobile)
 window.addEventListener("resize", hand);
 React.useEffect(() => {
    hand()
}, []);  
console.log(window.innerWidth)
  React.useEffect(() => {
    if(pageYOffset > 570) {
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
     {mobile ?  (<> <div className={`nav ${navFix ? "nav-fixed": ""}`}>
            <div className="logo-nav">
                <h1><Link to="/">Logo</Link></h1>
            </div>
            <div className="nav-link">
                <ul>
                    <li><Link to="/comp/homes">Homes</Link></li>
                    <li><Link to="/comp/rental">Rentals</Link></li>
                    <li><Link to="/comp/contact">Contact us</Link></li>
                </ul>
            </div>
        </div></>) : (<>
        <div className="nav-con-mob">
        <div className={`nav-link ${navDrop ? "show-nav" : "hide-nav"}`}>
                <ul>
                    <li><Link to="/comp/homes">Homes</Link></li>
                    <li><Link to="/comp/rental">Rentals</Link></li>
                    <li><Link to="/comp/contact">Contact us</Link></li>
                </ul>
            </div>
          <div className={`nav-mob `}>
            
            <div className="logo-nav">
                <h1><Link to="/">Logo</Link></h1>
            </div>
            <div className="burger-con" onClick={navHandler}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            
          
        </div>
     
            </div>
        </>) }
     </div>
   </>
  );
}

export default Nav;