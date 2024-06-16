// По сути главный файл, где все .js с названиями Todo соединяются


import React, {useState} from 'react'
import { TodoForm } from "./TodoForm"
import { v4 as uuidv4 } from "uuid";
import { Todo } from './Todo';
// Инициализация нашей базы
uuidv4();

export const TodoWrapper = () => {
        const [todos, setTodos] = useState([])

        // Функция для добавления задачи на экран
        const addTodo = todo => {
            setTodos([...todos, {id: uuidv4(), task: todo, complete: false, isEditing: false}]) // ... делает копию
            console.log(todos)
        }
    return (
        <div className='TodoWrapper'>
            <TodoForm addTodo= {addTodo}/>
            <Todo />
        </div>
    )
}