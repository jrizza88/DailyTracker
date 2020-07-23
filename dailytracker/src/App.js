import React, {useState} from 'react';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import './App.css';


const  App = () => {
  const [todos, setTodos] = useState([  {
    task: 'Work on projects',
    id: 1,
    completed: false
  },
  {
    task: 'Complete Coding challenges',
    id: 2,
    completed: false
  },
  {
    task: 'Check turnip prices in Animal Crossing',
    id: Date.now(),
    completed: false
  }
]);

  return (
    <div className="App">
      <TodoForm />
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
