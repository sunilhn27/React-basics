import React from 'react';
import useCounter from './useCounter';

function Counter() {


    // const [count, setCount] = useState(0)

    // function increment() {
    //     setCount(count + 1);
    // }

    // function decrenment() {
    //     setCount(count - 1);
    // }

    const [count, increment, decrenment] = useCounter();

    return (
        <div className='container'>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrenment}>-</button>
        </div>
    )
}

export default Counter
