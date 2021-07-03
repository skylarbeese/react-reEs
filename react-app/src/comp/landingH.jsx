

import React, { useEffect, useState } from 'react'
import './landingH.css';
import Arr from './../ArrImg'
import { BsArrowLeft, BsArrowRight }  from "react-icons/bs";

function LandingH() {
    const[active, setActive] = React.useState(0)

    const[arrLeft, setArrLeft] = React.useState(false)
    const length = Arr.length
  

   React.useEffect(() => {
      const interval = setInterval(() => {
        setActive(active === length  - 1 ? 0 : active + 1)
      }, 13000)
      return () => clearInterval(interval)
    }, [active])

   
   
    
    const nextSlide = () => {
       setActive(active === 0 ? length - 1 : active - 1)
    }
    const prevSlide = () => {
      setActive(active === length - 1 ? 0 : active + 1)
    }
    if(!Array.isArray(Arr) || Arr.length <= 0) {
      return null;
    }

  const handleArrowOn = () => {
    setArrLeft(true)
  }
  const handleArrowLe = () => {
    setArrLeft(false)
  }
   
  return (
   <>
    <div className="landing-con-her" onMouseEnter={handleArrowOn} onMouseLeave={handleArrowLe}>
        <div className={`arrows `}>
        <BsArrowLeft className={arrLeft ? "arrows-show-left" : "arrows-hide-left"} onClick={prevSlide}/>
        <BsArrowRight className={arrLeft ? "arrows-show-right" : "arrows-hide-right"} onClick={nextSlide}/>
        </div>
      {Arr.map((im, index) =>   {
          return (<><div className="landi" key={index}>
          {index === active && <><div className="landing-text">
           <div className="text-la">
            <h1>{im.prop} in {im.location.city}, {im.location.state}</h1>
                    <h2>{im.price}</h2>
                <button className="btn-sh">see more</button>
      </div>
            </div>
      <div className="grad-w"></div>
      <div className="landing-hero-img-la">
            <div className="slide-img" style= {{backgroundImage: `url(${im.img})` }}></div>
     </div></>}
        </div></>)})} 
    </div>
   </>
  );
}

export default LandingH;