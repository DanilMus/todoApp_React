import React, {useState} from 'react'
import { v4 as uuidv4 } from "uuid";

import { TodoForm } from "./TodoForm"
import { Todo } from './Todo';
import { EditTodoForm } from "./EditTodoForm"
// Инициализация нашей базы
uuidv4();


// По сути главный файл, где все .js с названиями Todo соединяются
export const TodoWrapper = () => {
        const [todos, setTodos] = useState([])

        // Функция для добавления задачи на экран
        const addTodo = todo => {
            setTodos([...todos, {id: uuidv4(), task: todo, complete: false, isEditing: false}]) // ... делает копию
            console.log(todos)
        }

        // Функция для зачеркивания выполненных задач
        const toggleComplete = id => {
            setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
        }

        // Функция для удаления задачи
        const deleteTodo = id => {
            setTodos(todos.filter(todo => todo.id !== id))
        }

        // Функция для вставки формы для обновления задачи
        const editTodo = id => {
            setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
        }

        // Функция для обновления текста задачи
        const editTask = (task, id) => {
            setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
        }

    return (
        <div className='TodoWrapper'>
            <h1>Планировщик задач ;)</h1>
            <TodoForm addTodo= {addTodo}/>
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm task={todo} key={index} editTodo={editTask}/>
                ) : (
                    <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
                )
            ))}

        </div>
    )
}