import './landingR.css';
import React from 'react'
import ArrI from './../ArrI'
function LandingR() {
  return (
   <>
    <div className="landing-con">
        <div className="land">
            <div className="landing-text-se">
                <h1>Search for rentals</h1>
                <form>
                    <input type="text" />
                </form>
            </div>
            <div className="grad"></div>
            <div className="landing-hero-img">
            <div className="slide-img" style= {{backgroundImage: `url(${ArrI[0]})` }}></div>
            </div>
        </div>
    </div>
   </>
  );
}

export default LandingR;