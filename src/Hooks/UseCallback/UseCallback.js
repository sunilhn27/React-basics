import React, { useCallback, useState } from 'react'
import Child from './Child';

function UseCallback() {


    const [add, setAdd] = useState(0);
    const [count, setCount] = useState(0);


    // const learning = () => {
    //     console.log("Learing")
    // }

    const learning = useCallback(() => {

    }, [count])

    return (
        <div>
            <h1>{add}</h1>
            <Child learning={learning} count={count} />
            <button onClick={() => setAdd(add + 1)}>+</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(add + 2)}>Count</button>
        </div>
    )

}

export default UseCallback;
