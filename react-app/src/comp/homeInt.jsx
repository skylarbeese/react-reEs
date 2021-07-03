import React from 'react'
import './homeInt.css';
import ArrI from './../ArrI'
function HomeInt() {
  return (
   <>
    <div className="int-con">
        <div className="int-c">
            <div className="strip"></div>
            <div className="int-te-con">
                <div className="int-text">
                <div className="te">
                <h1>"Our agents are ready to help"</h1>
                 <p>Bacon ipsum dolor amet pastrami salami 
frankfurter, t-bone pork short loin</p>
                </div>
                </div>
                <div className="int-img">
                <div className="new-img" style= {{backgroundImage: `url(${ArrI[4]})` }}></div>
                </div>
            </div>
            <div className="strip bo"></div>
        </div>
    </div>
   </>
  );
}

export default HomeInt;