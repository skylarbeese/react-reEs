import './landingHo.css';
import React from 'react'
import ArrI from './../ArrI'
import Arr from './../ArrImg'
import Nav from './nav'
import ListingsH from "./listingsH"
function LandingHo({Home, searchHandler, search, searchWord}) {
const inputEl = React.useRef()
const [data, setData] = React.useState("")

const searchTerm = () => {
   searchHandler(inputEl.current.value)
  }
    
  return (
   <>
    <div className="landing-con">
        <div className="land">
            <div className="landing-text-se">
                <h1>Search for Homes</h1>
                <form>
                    <input type="text" placeholder="address, state, city, zip code"
                    ref={inputEl} onChange={searchTerm}
                    />
                </form>
            </div>
            <div className="grad"></div>
            <div className="landing-hero-img">
            <div className="slide-img" style= {{backgroundImage: `url(${ArrI[2]})` }}></div>
            </div>
        </div>
    </div>
    <Nav />
    {searchWord.length > 0 ? (<><div className="Sear">{search.length} results for {searchWord}</div></>) : null}

   {search.length > 0 ? (<><ListingsH Home={Home} search={search}/></>) : (<>
    <div className="resul-box-none">
     <div className="box-non">
         <h1>No Results found for {searchWord}</h1>
     </div>
   </div>
   </>)}
   
   </>
  );
}

export default LandingHo;