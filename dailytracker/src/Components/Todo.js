import React from 'react';
import './Todo.css';

const Todo = ({todo, handleToggleComplete}) => {
    return (
    <div>
        <div className="complete" 
        style={todo.completed ? {textDecoration: 'line-through'} : null}
        onClick={() => handleToggleComplete(todo.id)}
        >
            {/* <input type="checkbox" value={todo.completed} /> */}
            <h2 className="task">{todo.task}</h2>
        </div>
    </div>
    )
}

export default Todo