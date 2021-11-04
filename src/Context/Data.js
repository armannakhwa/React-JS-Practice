import React, { createContext, useState } from 'react'
let info = createContext();

export default function Data(props) {
    let [s, sets] = useState("Arman");
    return (
        <info.Provider value={{ s, sets }}>
            {props.children}
        </info.Provider>
    )
}

export { info }
