import React from 'react'
// Иморты всяких иконок и шрифтов
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


// Отображение задач
// Вот ты видишь список под введением задач. Каждый элемент задачи с иконкой изменения и удаления относится к этому 
export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
    return (
        <div className="Todo">
            <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
            </div>
        </div>
    )
}