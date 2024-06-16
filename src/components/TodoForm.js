import React, { useState } from 'react'

// Форма для верхней строчки, где добавляются задания и находится кнопка "Добавить"
export const TodoForm = ({addTodo}) => {
        const [value, setValue] = useState("")

        // Кнопка, которая обрабатывает нажание на кнопку Добавить и записывает данные для последующего использования
        const handleSubmit = e => {
            e.preventDefault();
            addTodo(value);
            setValue("") // Обнуляет строку после сразабатывания
        }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type= "text" className= "todo-input" value={value}
                placeholder='Какое задание добавить?' onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Добавить</button>
        </form >
    )
}