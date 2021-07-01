import React from 'react'
import LandingHo from "./landingHo"
import ListingsH from "./listingsH"
import BannerHo from "./bannerHo"
import Arr from './../ArrImg'
//import Nav from "./nav"
function Homes() {
  const [searchWord, setSearchWord] = React.useState('')

  const [searchResults, setSearchResults] = React.useState([])
  const Home = Arr.filter(rent => {
    return rent.prop === 'Home'
  })
  const searchHandler = (searchWord) => {
    setSearchWord(searchWord)
    if(searchWord !== "") {
      const list = Home.filter((Arr) => {
      return  Object.values(Arr).join(" ").toLowerCase().includes(searchWord.toLowerCase()) 
 
     
      
      })
      setSearchResults(list)
    } else {
     setSearchResults(Home)
    }
   }
  return (
   <>
    <LandingHo Home={Home} searchHandler={searchHandler} searchWord={searchWord}
     search={searchWord.length < 1 ?  Home : searchResults}
    /> 
    
    
    <BannerHo />
   </>
  );
}

export default Homes;