import './style.css';
import { Header } from './Comp/Header';
import React, { useState } from "react";
import logo from './giphy.gif';
import Propeg from "./Comp/Propeg";
import Timing from "./Comp/Timing";
import Data from "./Context/Data";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//import Result from './Comp/Result';
import IA1Result from './Comp/IA1Result';
import IAResult from './Comp/IAResult';
import Usecontext from './Comp/Usecontext';
import Send1page2other from './Comp/Send1page2other';
import Secondpage from './Comp/Secondpage';

var s = 0;
function HomeScreen() {
  const [a, seta] = useState();

  function count() {
    seta(s);
    s = s + 1;

  }
  return (
    <>

      <div className="v-h-center">
        <div className="Container">
          <h2>React-JS IP LAB Code Here</h2>
          <img src={logo} width="50%" alt="Error" />
          <br />
          <button onClick={count}>Counter</button>
          <b className="count">{a}</b><br />
          <div>Designed By Arman</div>
        </div>
      </div>
    </>
  );

}

function App() {
  return (
    <Data>

      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/16_08_2021">
            <Propeg />
          </Route>

          <Route exact path="/17_08_2021">
            <Timing />
          </Route>

          <Route exact path="/UseContext">
            <Usecontext />
          </Route>

          <Route exact path="/form">
           <Send1page2other/>
          </Route>

          <Route exact path="/secondpage/:name/:address/:mob">
         <Secondpage/>
          </Route>

          {/* <Route exact path="/Result">
          <Result />
        </Route> */}
          <Route exact path="/IA1Result">
            <IA1Result />
          </Route>

          <Route exact path="/IAResult">
            <IAResult />
          </Route>
        </Switch>

      </Router>
    </Data>
  );
}

export default App;
