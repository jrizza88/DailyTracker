import React from 'react';
import './Todo.css';

const Todo = ({todo, handleToggleComplete, handleEdit, handleClearCompleted}) => {
    return (
    <div className="container" >
        <div 
                   style={todo.completed ? {textDecoration: 'line-through'} : null}
        > 
            <h2 className="task">{<input type="text"  id={todo.id} value={todo.task} onChange={(e) => {
            handleEdit(e.target.value, todo.id)
        }}/>}</h2>
        </div>
        {/* <button onClick={(<input type="text" id={todo.id} value={todo.task} onChange={(e) => {
            handleEdit(e.target.value, todo.id)
        }}/>)}>Edit </button> */}
        {/* <button onClick={() => handleEdit(todo.id)}>Edit </button> */}
        <button onClick={() => handleToggleComplete(todo.id)}>Mark Complete?</button>
        <button onClick={() => handleClearCompleted(todo.id)}>Delete</button>
    </div>
    )
}

export default Todo