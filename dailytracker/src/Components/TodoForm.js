import React, { useState } from 'react';

const TodoForm = ({handleChange, value, handleSubmit, completeTodo, handleDelete}) => {
    return (
    <div>
        <form>
        <input 
            type="text"
            name="todo"
            onChange={handleChange}
            value={value}
            placeholder="Add a task!"
        />
        </form>
        <button onClick={handleSubmit}>Add Task</button>
        <button onClick={completeTodo}>Complete Task</button>
        <button onClick={handleDelete}>Remove Task</button>
    </div>
    )
}

export default TodoForm