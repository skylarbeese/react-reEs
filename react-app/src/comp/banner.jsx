import React from 'react'
import './banner.css';
import ArrI from './../ArrI'
import {Link} from 'react-router-dom'
function Banner() {
  return (
   <>
     <div className="ban-con">
         <div className="banner-con">
             <div className="ban-text">
                 <h1>"Our agents are ready to help"</h1>
                 <p>Contact on of our agents by sending a message in our
contact form to get started looking for your dream property
</p>
<Link to="/comp/contact"></Link><button className="btn-sh btn">contact us</button><Link />
                 
             </div>
             <div className="grad"></div>
             <div className="banner-img">
             <div className="slide-img" style= {{backgroundImage: `url(${ArrI[3]})` }}></div>
             </div>
             
         </div>
     </div>
   </>
  );
}

export default Banner;