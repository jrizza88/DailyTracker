import React, {useState} from 'react';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import './App.css';


const  App = () => {
  const [todos, setTodos] = useState([  
    {
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

const addToDo = add => {
  console.log('add to do!')
  const addNewTodo = {
    task: add.task,
    id: Date.now(),
    completed: false
  }
  setTodos([...todos, addNewTodo])
}



const clearCompleted = e => {
  e.preventDefault()
 console.log('clear completed clicked!')

}

const toggleTodo = id => {
  let toggleTodos = [...todos]
  toggleTodos.map(t => {
    if (t.id === id) {
      console.log('toggled!', t)
      t.completed = !t.completed;
      return t
    } else {
      return t
    }
  })
  setTodos(toggleTodos)
}



  return (
    <div className="App">
      <TodoForm 
        addTodoProp={addToDo}
        handleClearCompleted={clearCompleted}
      />
      <TodoList 
      handleToggleComplete={toggleTodo}
      todos={todos}/>
    </div>
  );
}

export default App;
