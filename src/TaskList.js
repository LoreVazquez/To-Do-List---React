import React from 'react';

function TaskList(props) {
    return ( <ul>
                {props.items.map(item => (
                    <Task key={item.id} text={item.text} />
                ))}
            </ul> );
}

export default TaskList;