import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Send1page2other() {
    let [d, setd] = useState("");
    function data(e) {
        setd({ ...d, [e.target.name]: e.target.value });
        console.log(d);
    }
    return (
        <div className="container">
            <h2 className="text-center">Send Form Data to other Page</h2>
            <input placeholder="Enter You name" type="text" name="name" onChange={data} className="form-control w-100" />
            <input placeholder="Enter You address" type="text" name="address" onChange={data} className="my-2 form-control w-100" />
            <input placeholder="Enter You mob" type="number" name="mob" onChange={data} className="form-control w-100" />
            <Link to={`/secondpage/${d.name}/${d.address}/${d.mob}`} className="btn btn-danger d-block" >send Data</Link>

        </div>
    )
}
