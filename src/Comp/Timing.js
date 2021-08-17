import React, { useState } from 'react';

export default function Timing() {
 const [time,setTime]=useState("");

function T()
{
setTimeout(()=>{
    alert("Hello this is the example of setTimeout");
},2000)
}
function I()
{
    setInterval(() => {
        setTime(new Date().toLocaleString());
    },500);
}

    return (
        <div>
        <h1>SetTimeout and setInterval Example</h1>
        <button onClick={T}>start setTimeout</button>
        <button onClick={I}>start setInterval</button>
        <b>{time}</b>
        </div>
    )
}
