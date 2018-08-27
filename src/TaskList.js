import React from 'react';
import Task from './Task'

function TaskList(props) {
    return ( <div>
                {props.tasks.map(task => (
                    <Task key={task.id}
                    id={task.id} 
                    text={task.text}
                    done={task.done}
                    onCheck = {props.onCheck}
                    onDelete = {props.onDelete}
                    onEdit = {props.onEdit}
                    />
                ))}
            </div> 
    );
}

export default TaskList;