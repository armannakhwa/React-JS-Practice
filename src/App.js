import './style.css';
import {Header} from'./Comp/Header';
import React from "react";
import logo from './giphy.gif';

function App() {
  return (
<span>
<h1>IP LAB React JS Practice Code Here</h1>
<div className="Container">
  <img src={logo} width="50%" alt="Error" />
<Header/>
<br/>
<div>Designed By Arman</div>
</div>
</span>

  );
}

export default App;
