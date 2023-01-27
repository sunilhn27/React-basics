import React, { useState } from 'react'
import { useRef } from 'react'

export default function UseRef() {

    const [name, setName] = useState();
    const userefElement = useRef("");
    console.log(userefElement)
    function reset() {
        setName("");
        userefElement.current.focus();
        //userefElement.current.style.color="red";
    }

    return (
        <div>
            <>
                <h1>learing useRef</h1>
                <input type="text" ref={userefElement} onChange={(e) => setName(e.target.value)} value={name}></input>
                <button onClick={reset}>Reset</button>
            </>
        </div>
    )
}
