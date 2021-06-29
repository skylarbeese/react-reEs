
import React from 'react'
import LandingH from "./landingH"
import Nav from "./nav"
import NewH from "./newH"
import NewR from "./newR"
import HomeInt from "./homeInt"
import Banner from "./banner"
import Arr from './../ArrImg'
function Home() {
  return (
   <>
    <LandingH />
    <Nav />
    <NewH />
    <Banner />
    <HomeInt />
    <NewR />
    
   </>
  );
}

export default Home;