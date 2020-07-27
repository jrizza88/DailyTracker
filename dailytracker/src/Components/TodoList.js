import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = ({todos, handleToggleComplete}) => {
    return (
    <div>
        <ul>
            {todos.map(todo => (
                <Todo 
                    key={todo.id} 
                    todo={todo} 
                    handleToggleComplete={handleToggleComplete}/>
                
            ))}
        </ul>
        
    </div>
    )
}

export default TodoList