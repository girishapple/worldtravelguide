import React, {Fragment} from 'react';

import CountryGuides from './Components/CountryGuides';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import CityGuides from './Components/CityGuides';
import Features from './Components/Features';
import Flight from './Components/Flight';
import Accomodation from './Components/Accomodation';
import Food from './Components/Food';





const App = () => {
    return (
        <Fragment>  
            
          <Router> 
           <ToastContainer/>
           <Switch> 
               <Route path="/" exact>
               <Home/>
               </Route>
               <Route path="/CountryGuides" exact>
               <CountryGuides/>
               </Route>
               <Route path="/CityGuides" exact>
               <CityGuides/>
               </Route>
               <Route path="/features" exact>
               <Features/>
               </Route>
               <Route path="/flights" exact>
               <Flight/>
               </Route>
               <Route path="/accomodation" exact>
               <Accomodation/>
               </Route> 
           </Switch>
           </Router>
        </Fragment>
    )
}

export default App
