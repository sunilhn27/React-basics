import React, { useState } from 'react'

function TodoList() {
  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState([])


  const handleOnsubmit = (event) => {
    event.preventDefault();
    let tempList = todoList;
    tempList.push(todo);
    setTodoList(tempList);
    console.log(tempList);
    setTodo("");
  }

  function handleonChange(event) {
    setTodo(event.target.value);
  }
  function handleRemoveAll() {
    setTodoList([])
  }

  return (
    <div>
      <form onSubmit={handleOnsubmit} >
        <input onChange={handleonChange} placeholder="Add TodoList" type="text" value={todo} ></input>
        <button type="submit">Add</button>
        <button onClick={handleRemoveAll} type="submit">RemoveAll</button>
      </form>
      <div>
        <ul>{todoList.map(
          name => <h3 key={name}> {name} </h3>
        )}</ul>
      </div>


    </div>
  )
}

export default TodoList;
