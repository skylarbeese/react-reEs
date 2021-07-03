import React from 'react'
import LandingR from "./landingR"
//import Nav from "./nav"
import Arr from './../ArrImg'
import BannerR from "./bannerR"
function Rental() {
  const[searchWord, setSearchWord] = React.useState('')
  const[searchResult, setSearchResult] = React.useState([])
  const Rent = Arr.filter(rent => {
    return rent.prop === 'Rental'
  })
 
  const searchHandler = (searchWord) => {
    setSearchWord(searchWord)
    if(searchWord !== "") {
      const list = Rent.filter((Arr) => {
      return  Object.values(Arr).join(" ").toLowerCase().includes(searchWord.toLowerCase()) 
    })
      setSearchResult(list)
    } else {
     setSearchResult(Rent)
    }
   }

  return (
   <>
    <LandingR Rent={Rent} searchHandler={searchHandler} searchWord={searchWord}
     search={searchWord.length < 1 ? Rent: searchResult}
    />
    <BannerR />
   </>
  );
}

export default Rental;