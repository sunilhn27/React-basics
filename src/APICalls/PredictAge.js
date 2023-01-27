import React from 'react'
import Axios from 'axios'
import { useState } from 'react'


function PredictAge() {

    const [predictData, SetPredictData] = useState("")
    const [name, setName] = useState(null)

    async function fetchApi() {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            console.log(res.data);
            SetPredictData(res.data);
        })
    }

    return (
        <div>
            <input type="text" onChange={(e) => { setName(e.target.value) }}></input>
            <button onClick={fetchApi}>PredictAge</button>
            <h2>Predicted Age is {predictData?.age}</h2>
            <h2>Predicted Name is {predictData?.name}</h2>
            <h2>Predicted count is {predictData?.count}</h2>
        </div>
    )

}

export default PredictAge;




