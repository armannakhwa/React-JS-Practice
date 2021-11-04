import React, { useContext } from 'react'
import { info } from "../Context/Data";
import Usecontextdata from './Usecontextdata';

export default function Usecontext() {
    let cinfo = useContext(info);
    console.log(cinfo)
    function name(n) {
        console.log(n);
        cinfo.sets(n);
    }
    return (
        <div>
            <h2 className="text-center">context api Example</h2>
            <input placeholder="Enter You name" type="text" name="name" onChange={(e) => name(e.target.value)} />
            {/* <Link to="/UseContextdata" target="_blank">View Data</Link> */}

            <Usecontextdata />
        </div>
    )
}
