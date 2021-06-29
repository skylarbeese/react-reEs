import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css';
function Nav() {
  return (
   <>
     <div className="nav-con">
        <div className="nav">
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