import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from "./comp/home"
import Homes from "./comp/homes"
import Rental from "./comp/rental"
import React from 'react'
function App() {
  return (
   <>
     <Router>
       <Switch>
         <Route path="/" component={Home} exact/>
         <Route path="/comp/rental" component={Rental}/>
         <Route path="/comp/Homes" component={Homes}/>
       </Switch>
     </Router>
   </>
  );
}

export default App;
