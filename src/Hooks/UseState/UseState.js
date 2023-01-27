import React, { useEffect } from 'react'
import { useState } from 'react'

function UseState() {

    const [getColor, setColor] = useState("red");
    return (
        <div>
            <>
                <h1>my Favorite Color is {getColor}</h1>
                <button onClick={() => setColor("blue")}>Blue</button>
                <button onClick={() => setColor("green")}>Green</button>
                <button onClick={() => setColor("yellow")}>Yellow</button>
                <button onClick={() => setColor("orange")}>Orange</button>

            </>
        </div>
    )
}

function Car() {

    const [car, setCar] = useState({
        brand: "Maruthi",
        model: "Swift",
        year: "1994",
        color: "Red"
    });

    const updateColor = () => {
        console.log("Inside Update Color");
        setCar((prev) => {
            return { ...prev, brand: "BMW", year: 2022 }
        })
    }
    return (
        <>
            <h1>My Car Name is {car.brand}</h1>
            <p>
                it is a {car.color}  {car.model} from {car.year}
            </p>
            <button onClick={updateColor}>SetCar</button>
        </>
    )
}

///////////////


export default Car;