import React, { useState } from "react";
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
<b className="count">{a}</b>
</>
    );

}
