import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Arr from './ArrImg'
import Home from "./comp/home"
import Homes from "./comp/homes"
import Rental from "./comp/rental"
import Contact from "./comp/contact"
import More from "./comp/more"
import React from 'react'
function App() {
  return (
   <>
     <Router>
       <Switch>
         <Route path="/" component={Home} exact/>
         <Route path="/comp/rental" component={Rental}/>
         <Route path="/comp/Homes" component={Homes}/>
         <Route path="/comp/contact" component={Contact}/>
         <Route path="/comp/contact" component={More}/>
         
       </Switch>
     </Router>
   </>
  );
}

export default App;
