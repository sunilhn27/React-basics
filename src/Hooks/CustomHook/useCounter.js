import React, { useState } from 'react'


function useCounter(intialvalue=27) {

    const [count, setCount] = useState(intialvalue)

    function increment() {
        setCount(count + 1);
    }

    function decrenment() {
        setCount(count - 1);
    }
    return [count, increment, decrenment];
}



export default useCounter
