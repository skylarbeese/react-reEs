import React from 'react'
import {Link} from 'react-router-dom'
import './newH.css';
function NewH() {
  return (
   <>
     <div className="newH-con new-h">
        <div className="newH">
            <div className="newH-text-box-1">
                <div className="newH-text">
                    <h1>Home in Venice, CA</h1>
                    <h2>200,200</h2>
                    <button className="btn-sh">see more</button>
                </div>
            </div>
            <div className="newH-img-1"></div>
        </div>
     </div>
   </>
  );
}

export default NewH;