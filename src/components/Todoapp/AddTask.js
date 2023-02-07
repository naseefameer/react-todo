import React, { useState } from 'react'

const AddTask = ({ addNewTask }) => {

    const [value, setValue] = useState("")

    const addItem = () => {
        addNewTask(value);
        setValue("");
    }

    return (
        <div>
            <div className='input-container'>
                <input type="text" className='input' placeholder='add new task' value={value}
                    onChange={(e) => { setValue(e.target.value) }} />
                <button onClick={addItem}>ADD</button>
            </div>
        </div>
    )
}

export default AddTask