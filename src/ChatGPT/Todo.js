import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { text: 'Learn React', isCompleted: false },
    { text: 'Build a Todo list', isCompleted: false },
    { text: 'Profit!', isCompleted: false }
  ]);

  function handleTodoClick(index) {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }

  function handleAddTodo(text) {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            onClick={handleTodoClick}
          />
        ))}
      </ul>
      <AddTodo onAddTodo={handleAddTodo} />
    </div>
  );
}

function Todo({ todo, index, onClick }) {
  return (
    <li onClick={() => onClick(index)} style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
      {todo.text}
    </li>
  );
}

function AddTodo({ onAddTodo }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;
    onAddTodo(text);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Add a new todo" />
    </form>
  );
}

export default TodoList;
