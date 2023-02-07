import React, { useEffect, useState } from 'react'
import AddTask from './AddTask';
import ListTask from './ListTask';
import './Todo.css';

const Todo = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        document.title = `you have ${tasks.length} pending task(s)`;
    });

    const addNewTask = (title) => {
        const newTask = [...tasks, { title }]
        setTasks(newTask)
    }

    const deleteTask = (index) => {
        const newTask = [...tasks]
        newTask.splice(index, 1)
        setTasks(newTask)
    }

    return (
        <div className='todo-container'>
            <div className='header'>TODO APP</div>
            <div className='add-task'>
                <AddTask addNewTask={addNewTask} />
            </div>
            <div className='tasks'>
                {tasks.map((task, index) => (
                    <ListTask task={task} deleteTask={deleteTask} newIndex={index} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Todo