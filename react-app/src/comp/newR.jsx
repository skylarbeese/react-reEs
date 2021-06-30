import React from 'react'
import {Link} from 'react-router-dom'
import Arr from './../ArrImg'
import './newR.css';
function NewR() {
  return (
   <>
     <div className="newH-con">
        <div className="newH-2">
        <div className="newH-img-2">
        <div className="new-img" style= {{backgroundImage: `url(${Arr[2].img})` }}></div>
        </div>
            <div className="newH-text-box-2">
            
                 <div className="newH-text">
                 <h1>Home in {Arr[2].location.city}, {Arr[2].location.state}</h1>
                    <h2>{Arr[2].price}</h2>
                    <button className="btn-sh">see more</button>
                </div>
            </div>
            
        </div>
     </div>
   </>
  );
}

export default NewR;