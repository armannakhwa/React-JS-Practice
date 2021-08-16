import React from 'react'

function IT(props)
{
    return(
<>
<h1 style={{backgroundColor:'tomato'}}>Name:{props.name}</h1>
<h1 style={{backgroundColor:'gold'}}>Branch and Year:{props.BY}</h1>
</>
    );
}
export default function Propeg() {
    return (
        <div>
            <h1>this data is pass or fetch by using props</h1>
          <IT
          name="Arman Nakhwa"
          BY="IT 3rd year"
          />

<IT
          name="Ved Shirgaonkar"
          BY="IT 3rd year"
          />
        </div>
    )
}
