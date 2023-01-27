import React, { useState } from 'react'


function Conditional() {
    const [display, setDisplay] = useState(true);

    if (display) {
        return (
            <div>
                <h3> Statement is True Display Login Page</h3>
            </div>
        )
    } else {
        return (
            <div>
                <h3>Statement is False Nothing to Display</h3>
            </div>
        )
    }
}


function Conditional1() {
    const [display, setDisplay] = useState(false);
    let output;

    if (display) {
        output = <h3>This Statement is True </h3>
    } else {
        output = <h3>This Statement is False </h3>
    }

    return (
        <div>
            {output}
        </div>
    )
}

function Conditional2() {
    const [display, setDisplay] = useState(true);
    return display ? (<div><h3>This Statement is True </h3></div>) : (<div><h3>This Statement is False </h3></div>)
}


export default Conditional2;
