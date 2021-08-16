import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
var s=0;
export function Header()
{

const [a,seta]=useState();

function count()
{
    seta(s);
    s=s+1;

}

return(
<>
<h2>Hello Te Students</h2>
<button onClick={count}>Counter</button>
<b className="count">{a}</b><br/>
<Link to="/16_08_2021"><button>view work 16_08_2021</button></Link>
</>
);


}
