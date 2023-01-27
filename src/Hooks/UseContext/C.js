import React, { useContext } from 'react'
import { data,data1 } from './Parent';

export default function C() {

    const name = useContext(data);
    const age = useContext(data1);

    return (
        <div>
            C age is {age} +name is {name}
        </div>
    )
}

