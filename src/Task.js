import React from 'react';

class Task extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            editing: false,
            text: ""
        }

        this.makeEditable = this.makeEditable.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);

        this.inputRef = React.createRef();        
    }

    handleInputChange(event){
        this.setState({text:event.target.value});
    }

    makeEditable(event){
        event.preventDefault();
        //para que aparezca el texto mientras se edita
        this.setState({editing:true, text: this.props.text});
    }

    handleCancel(event){
        event.preventDefault();
        this.setState({editing:false});
    }

    handleEdit(event){
        event.preventDefault();
        this.props.onEdit(this.state.text, this.props.id);
        this.setState({editing:false});
    }

    handleKeyUp(event){
        if(event.keyCode === 13) this.handleEdit(event);
    }

    componentDidUpdate(){
        if(this.state.editing){
            this.inputRef.current.focus(); //Duda
        }
    }

    render (){
        if(this.state.editing){
            return (
                <div className="task" id={this.props.id}>
                    <p>
                        <label>
                            <input type="text" ref={this.inputRef} 
                                id={`input-${this.props.id}`}
                                value={this.state.text}
                                onKeyUp={this.handleKeyUp}
                                onChange={this.handleInputChange}/>
                        </label>
                        <div className="row">
                            <a class="waves-effect waves-light btn-small" onClick={this.handleCancel}><i class="material-icons left">cancel</i></a>
                            <a class="waves-effect waves-light btn-small" onClick={this.handleEdit}><i class="material-icons left">save</i></a>
                        </div>
                    </p>
                </div>
            );
        } else {
            return (
                <div className="task" id={this.props.id}>
                    <p>
                        <label>
                            <input type="checkbox" 
                                id={`check-${this.props.id}`}
                                onChange={this.props.onCheck}
                                checked={this.props.done}/>
                            <span htmlFor={`check-${this.props.id}`}>{this.props.text}</span>
                        </label>
                        <div className="row">
                            <a class="waves-effect waves-light btn-small" onClick= {this.makeEditable}><i class="material-icons left">edit</i></a>
                            <a class="waves-effect waves-light btn-small" onClick={this.props.onDelete}><i class="material-icons left">delete</i></a>
                        </div>
                    </p>
                </div>
            );
        }
    }
}

export default Task;
