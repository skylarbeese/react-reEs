import React from 'react'
import LandingHo from "./landingHo"
import ListingsH from "./listingsH"
import BannerHo from "./bannerHo"
import Nav from "./nav"
function Homes() {
  return (
   <>
    <LandingHo />
    <Nav />
    <ListingsH />
    <BannerHo />
   </>
  );
}

export default Homes;