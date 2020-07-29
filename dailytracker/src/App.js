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

const editTodo = (edit, id) => {
  console.log('edit!')
  // run toggleTodo to prevent toggling?
  let editTask = [...todos]
  editTask.map(item => {
    if (item.id === id){
      console.log('editing item?')
      // item.edit = edit
      item.task = edit
      return item
    } else {
      console.log('huh?')
      item.edit = edit
      return item
    }
  })
    setTodos(editTask)
  // const editTask = {
  //   task: edit.task,
  //   id: edit.id,
  //   completed: false
  // }
  // setTodos([...todos, editTask])
}

const clearCompleted = () => {
 console.log('clear completed clicked!')
let clearTask = todos.filter(todo => !todo.completed)
 setTodos(clearTask)
 console.log('completeit...', clearTask)
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
      />
      <TodoList 
      handleToggleComplete={toggleTodo}
      todos={todos}
      handleClearCompleted={clearCompleted}
      handleEdit={editTodo}
      />
    </div>
  );
}

export default App;
