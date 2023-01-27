import React, { useEffect, useState } from 'react'
import Axios from 'axios';

function CatFacts() {

    const [catFacts, setCatFacts] = useState("")




    useEffect(() => {
        console.log("inside useeffects")
        fetchCatFacts();
        
    }, [])



    async function fetchCatFacts() {
        Axios.get("https://catfact.ninja/fact").then((res) => {
            setCatFacts(res.data.fact)
        })
    }


    return (
        <div>
            <button onClick={fetchCatFacts}>Generate Cat Facts</button>
            <p><b>{catFacts}</b></p>
        </div>
    )
}

export default CatFacts
