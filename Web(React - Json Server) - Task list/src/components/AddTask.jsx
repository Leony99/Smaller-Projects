import { useState } from 'react';

import './AddTask.css';

import Button from './Button';

const AddTask = (props) => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () => {
        props.handleTaskAdd(inputData);
        setInputData('');
    }

    return (
        <div className="add-task-container">
            <input className="add-task-input" type="text" onChange={handleInputChange} value={inputData}/>
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Add</Button>
            </div>
        </div>
    )
}

export default AddTask;