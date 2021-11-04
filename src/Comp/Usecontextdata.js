import React,{useContext} from 'react'
import {info}  from "../Context/Data";


export default function Usecontextdata() {
    let cinfo=useContext(info);


    return (
        <h1>{cinfo.s}</h1>
    )
}
