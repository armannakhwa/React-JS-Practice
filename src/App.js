import './style.css';
import { Header } from './Comp/Header';
import React, { useState } from "react";
import logo from './giphy.gif';
import Propeg from "./Comp/Propeg";
import Timing from "./Comp/Timing";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Result from './Comp/Result';

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
        <Route exact path="/Result">
          <Result />
        </Route>
      </Switch>

    </Router>


  );
}

export default App;
