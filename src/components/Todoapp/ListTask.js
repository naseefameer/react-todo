import React from 'react'

const ListTask = ({ task, deleteTask, newIndex }) => {

    const deleteNewTask = (newIndex) => {
        deleteTask(newIndex)
    }

    return (
        <>
            <div className='list-task'>
                {task.title}
                <button onClick={() => { deleteNewTask(newIndex) }}>Delete</button>
            </div>
        </>
    )
}

export default ListTask