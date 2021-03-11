import React from 'react'

const RandomNumber = props =>  {
    const result = Math.floor(Math.random() * (props.b - props.a + 1)) + props.a;
    return (
        <div>
            <h2>Exibindo o número aletatótio [{ result }]</h2>
        </div>
    )
}

export default RandomNumber;