import React, { useState } from 'react'

function UseState1() {

  const [value, setvalue] = useState("");
  const [history, sethistory] = useState([]);


  return <>
    <h1>Hello</h1>
    <input onChange={
      (e) => {
        setvalue(e.target.value)
        sethistory([...history, e.target.value])
      }
    } type="text" placeholder='Some Text'></input>
    {value}
    <hr/><br/>
    <ul>{
      history.map((tmp) => {
        return <div>{tmp}</div>
      })
    }
    </ul>
  </>
}

export default UseState1
