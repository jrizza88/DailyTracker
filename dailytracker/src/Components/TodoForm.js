import React, { useState } from 'react';

const TodoForm = ({addTodoProp}) => {

    const [formValue, setFormValue] = useState({
        task: '',
        id: '',
        completed: false
    });


    const handleSubmit = e => {
        e.preventDefault();
        console.log('form submited"')
        addTodoProp(formValue);
        setFormValue({
        task: '',
        id: '',
        completed: false
        })
    }

    const handleChange = e => {
        setFormValue({...formValue, [e.target.name]:e.target.value })
    }


    return (
    <div>
        <form onSubmit={handleSubmit}>
        <input 
            type="text"
            name="task"
            onChange={handleChange}
            value={formValue.task}
            placeholder="Add a task!"
        />
        <button>Add Task</button>
        </form>
        <button >Remove Task</button>
    </div>
    )
}

export default TodoForm