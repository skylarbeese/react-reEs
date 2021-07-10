import React from 'react'
import {Link} from 'react-router-dom'
import Arr from './../ArrImg'
import './listingsH.css';
function ListingsH({Home, search}) {
  return (
   <>
     <div className="listH-con">
       <div className="list-con">
       {search.map((im, index) => {
       return (<> <div className="li-img-con">
           <div className="text-li">
             <div className="text-li-con">
             <h1>{im.prop} in {im.location.city}, {im.location.state}</h1>
               <h2>{im.price}</h2>
             </div>
           </div>
           <div className="grad-li"></div>
           <div className="img-list-con">
           <div className="listing-img" style= {{backgroundImage: `url(${im.img})` }}></div>
           </div>
         </div>
       </>)})} 
       </div>
     </div>
   </>
  );
}

export default ListingsH;