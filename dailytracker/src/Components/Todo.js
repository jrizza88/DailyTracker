import React from 'react';
import './Todo.css';

const Todo = ({todo}) => {
    return (
    <div>
        <div className="todoBox">
            <input type="checkbox" value={todo.completed} />
            <h2>{todo.task}</h2>
        </div>
    </div>
    )
}

export default Todo