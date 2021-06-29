import './landingR.css';
import React from 'react'
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
            <div className="landing-hero-img"></div>
        </div>
    </div>
   </>
  );
}

export default LandingR;