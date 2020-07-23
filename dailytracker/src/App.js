import React, {useState} from 'react';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import './App.css';


const  App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
