
import React from 'react'
import LandingH from "./landingH"
import Nav from "./nav"
import NewH from "./newH"
import NewR from "./newR"
import HomeInt from "./homeInt"
import Banner from "./banner"
import Arr from './../ArrImg'
function Home() {
  const[mobile, setMobile] = React.useState(false)
  const hand = () => {
    let lastScroll = window.innerWidth;
      if(window.innerWidth > 480) {
        console.log('true')
        setMobile(true)
      } else {
        setMobile(false)
      }
      console.log(lastScroll)
    }
    console.log(mobile)
   window.addEventListener("resize", hand);
   React.useEffect(() => {
      hand()
  }, []); 
  return (
   <>
   {mobile ?(<> <LandingH />
    <Nav />
    <NewH />
    <Banner />
    <HomeInt />
    <NewR /></>) : (<>
      <Nav />
      <LandingH />
    
    <NewH />
    <Banner />
    <HomeInt />
    <NewR />
    </>)}
    
   </>
  );
}

export default Home;