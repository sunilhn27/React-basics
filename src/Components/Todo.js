import React from 'react'
import { memo } from 'react'

const Todo = ({ props }) => {
  console.log("Child Render");
  return (
    <>
      <h1>My Todo</h1>
      {props.map((todo, index) => {
        return <p key={index}>{todo}</p>
      })}
    </>
  )
}


export default memo(Todo);