import React from 'react';

class Task extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            editable: false,
            text: ""
        }

        
    }
    render (){
        return (
            <div>
                <p>
                    <label>
                        <input type="checkbox" />
                        <span>Red</span>
                    </label>
                    <div className="row">
                        <a class="waves-effect waves-light btn-small"><i class="material-icons left">edit</i></a>
                        <a class="waves-effect waves-light btn-small"><i class="material-icons left">delete</i></a>
                    </div>
                </p>
            </div>
        );
    }
}

export default Task;
