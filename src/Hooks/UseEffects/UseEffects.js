import React, { useEffect } from 'react'
import { useState } from 'react';

function UseEffects() {
    const [count, setcount] = useState(0);
    // useEffect(() => {
    //     //Runs only on the first render
    //   }, []);

    useEffect(() => {
        setTimeout(() => {
            setcount((count) => count + 1)
        }, 1000)
    }, []);
    return <h1>The Count is {count}</h1>
}

function useEffect2() {

    const [value, setcount] = useState(0);
    const [cal, setCal] = useState(0);


    useEffect(() => {
        console.log("inside useEffects")
        setCal(() => value * 2)
    }, [value]);

    return (
        <>
            <h1>Click To update {value}</h1>
            <button onClick={() => setcount((c) => c + 1)}>+</button>
            <p> value is {cal}</p>
        </>
    )


}

function WindowsWidth() {

    const [winwidth, setwinWidth] = useState([window.innerWidth])


    const handleResize = () => {
        setwinWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [])

    return (
        <div>
            wind width {winwidth}
        </div>

    )


}

export default WindowsWidth;
//export default useEffect;
//export default useEffect2;