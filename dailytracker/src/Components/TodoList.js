import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = ({todos, handleToggleComplete, handleClearCompleted}) => {
    return (
    <div>
        <ul>
            {todos.map((todo, index) => (
                <Todo 
                    key={todo.id} 
                    todo={todo} 
                    handleToggleComplete={handleToggleComplete}
                    handleClearCompleted={handleClearCompleted}
                    />
                
            ))}
        </ul>
        
    </div>
    )
}

export default TodoList