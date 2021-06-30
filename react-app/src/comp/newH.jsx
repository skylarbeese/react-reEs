import React from 'react'
import {Link} from 'react-router-dom'
import Arr from './../ArrImg'
import './newH.css';
function NewH() {
  const[active, setActive] = React.useState(0)
  const length = Arr.length
  return (
   <>
     <div className="newH-con new-h">
        <div className="newH">
            <div className="newH-text-box-1">
                <div className="newH-text">
                    <h1>Home in {Arr[0].location.city}, {Arr[0].location.state}</h1>
                    <h2>{Arr[0].price}</h2>
                    <button className="btn-sh">see more</button>
                </div>
            </div>
            <div className="newH-img-1">
            <div className="new-img" style= {{backgroundImage: `url(${Arr[0].img})` }}></div>
            </div>
        </div>
     </div>
   </>
  );
}

export default NewH;