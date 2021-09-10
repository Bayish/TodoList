import React from 'react';
import './addTask.css'

const Task = props => {
    return(
        <div className={props.className}>
            <h3>Task : {props.number}</h3>
            <p className='task-text'>{props.text}</p>
            <button className="task-btn" onClick={props.onChangeStatus}>done</button>
            <button className="task-btn" onClick={props.onRemove}>Delete</button>
        </div>
    )
};

export default Task;