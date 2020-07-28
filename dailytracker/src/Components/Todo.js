import React from 'react';
import './Todo.css';

const Todo = ({todo, handleToggleComplete, handleClearCompleted}) => {
    return (
    <div className="complete" >
        <div 
                   style={todo.completed ? {textDecoration: 'line-through'} : null}
                   onClick={() => handleToggleComplete(todo.id)}
        >
            <h2 className="task">{todo.task}</h2>
        </div>
        <button onClick={() => handleClearCompleted(todo.id)}>Delete</button>
    </div>
    )
}

export default Todo