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

    handleOnClick(e){
        this.props.onAdd(this.state.value);
        this.setState({value: ""});  
             
    }

    handleOnChange(event){
        this.setState({value:event.target.value});
        
    }

    handleOnKeyUp(event){
        if(event.keyCode === 13){
            this.handleOnClick();
            event.target.value = "";
        } 
    }



    render(){
        return ( <div className="addForm">
                    <div className="row">
                        <div className="input-field col s8 offset-s1">
                            <input id="write-task" type="text" className="validate" onChange = {this.handleOnChange} onKeyUp ={this.handleOnKeyUp}/>
                            <label htmlFor="write-task">Write your new task:</label>
                        </div>
                        <div className="input-field col s1">
                            <a className="" onClick = {this.handleOnClick}><i className="material-icons left">add</i></a>                   
                        </div>
                    </div>
                </div>
         );

    }
}

export default AddForm;