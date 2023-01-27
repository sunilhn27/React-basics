import React, { useState } from 'react'

function UseState3() {


    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }
    function setTozero() {
        setCount(0)
    }



    return (



        <div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={setTozero}>setTozero</button>
            <h1>{count}</h1>
        </div>
    )
}

export default UseState3
