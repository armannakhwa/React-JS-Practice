import './style.css';
import {Header} from'./Comp/Header';
import React from "react";
import logo from './giphy.gif';
import Propeg from "./Comp/Propeg";
import Timing from "./Comp/Timing";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function HomeScreen()
{
  return(
    <>
<h1>IP LAB React JS Practice Code Here</h1>
<div className="Container">
  <img src={logo} width="50%" alt="Error" />
<Header/>
<br/>

<div>Designed By Arman</div>
</div>
</>
  );

}

function App() {
  return (
 
  
<Router>
<Switch>
          <Route exact path="/">
          <HomeScreen/>
          </Route>
          <Route exact path="/16_08_2021">
            
         <Propeg/>

          </Route>
          
          <Route exact path="/17_08_2021">
            
          <Timing/>
   
             </Route>
        </Switch>

    </Router>


  );
}

export default App;
