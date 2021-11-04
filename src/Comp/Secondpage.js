import React from 'react'
import { useParams } from 'react-router-dom';


export default function Secondpage() {

    let { name, address, mob } = useParams()

    return (
        <div className="container">
            <h4 className="text-center">Form Data Recieved</h4>
            <b className="bg-light p-2">Name: {name}</b>
            <b className="bg-light p-2">Address: {address}</b>
            <b className="bg-light p-2">Mob: {mob}</b>

        </div>
    )
}
