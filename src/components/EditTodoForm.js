import React, { useState } from 'react'

// Форма для обновления текста задачи
export const EditTodoForm = ({editTodo, task}) => {
        const [value, setValue] = useState(task.task)

        const handleSubmit = e => {
            e.preventDefault();
            editTodo(value, task.id);
        }

    return (
        <form onSubmit={handleSubmit} className="TodoForm">
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Новый текст задачи' />
        <button type="submit" className='todo-btn'>Обновить</button>
        </form>
    )
}