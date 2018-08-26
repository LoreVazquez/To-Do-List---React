import React from 'react';

class AddForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value:""
        }
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
    }

    handleOnClick(){
        this.props.onAdd(this.state.value);
        this.setState({value: ""});        
    }

    handleOnChange(event){
        this.setState({value:event.target.value});
    }

    handleOnKeyUp(event){
        if(event.keyCode === 13) this.handleOnClick();
    }



    render(){
        return ( <div className="addForm">
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="write-task" type="text" class="validate" onChange = {this.handleOnChange} onKeyUp ={this.handleOnKeyUp}/>
                            <label for="write-task">Write your new task:</label>
                        </div>
                        <div class="input-field col s6">
                            <a class="waves-effect waves-light btn" onClick = {this.handleOnClick}><i class="material-icons left">add</i></a>                   
                        </div>
                    </div>
                </div>
         );

    }
}

export default AddForm;