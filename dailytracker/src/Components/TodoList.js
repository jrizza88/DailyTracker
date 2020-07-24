import React, { useState } from 'react';
import Todo from './Todo';

const TodoList = ({todos}) => {
    return (
    <div>
        <ul>
            {todos.map((todo, index) => (
                <Todo key={index} todo={todo}/>
            ))}
        </ul>
        
    </div>
    )
}

export default TodoList