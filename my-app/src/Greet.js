import React from 'react';

function Greet(props) {
    return (
        <div>
            <h1>Greet Component</h1>
            <p>This is from Greet component</p>
            <p>Hello {props.salutation_m + props.name}</p>
        </div>
    )
}

export default Greet