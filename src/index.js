import React, { useEffect, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import UseCallback from './Hooks/UseCallback/UseCallback';
// import App from './App';
// import Todo from './Components/Todo';
// import { useState } from 'react';
// import { data, data1 } from './Hooks/useContext/Parent'
 import UseState1 from './Hooks/UseState/UseState1';
// import Parent from '../useContext/Parent'

import CatFacts from './APICalls/CatFacts';
import TodoList from './ChatGPT/Todo';
import PredictAge from './APICalls/PredictAge';
import App from './App';
import Formvalidation from './Form/Formvalidation';
import MyForm from './Form/MyForm';
import Form from './Form/Form';
import UseForm from './Form/UseForm'
import Counter from './Hooks/CustomHook/Counter';
import LoginForm from './Form/LoginForm';
import NewForm1 from './Form/NewForm1'
import UseState3 from './Hooks/UseState/UseState3';
const App1 = () => {

  // const [count, setCount] = useState(0);
  // const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  // const name = useContext(data);
  // const age = useContext(data1);

  // const increment = () => {
  //   setCount((a) => a + 1);
  // };

  return (
    <>
      {/* <Todo props={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div> */}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UseState3/>);

