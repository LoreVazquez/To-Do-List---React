import React from 'react';
//import 'authenticate.css' para agregar estilos
import firebase from 'firebase'

class Authenticate extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password:'',
            error:'',
        }
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.handleCreateUser = this.handleCreateUser.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

    }

    handleEmailChange(e){
        this.setState({email: e.target.value});
    }

    handlePasswordChange(e){
        this.setState({password: e.target.value});
    }

    handleCreateUser(){
        console.log('algo')
        firebase.auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error =>{
            this.setState({error:error.message})
        });
    }

    handleLogin(){
        console.log('algo')
        firebase.auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error =>{
            this.setState({error:error.message})
        });
    }

    render(){

        return (
            <form>
                <div>{this.state.error}</div>
                <h1>To Do List</h1>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="email" type="email" class="validate" value={this.state.email} onChange={this.handleEmailChange}/>
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="password" type="password" class="validate" value={this.state.password} onChange={this.handlePasswordChange}/>
                        <label for="password">Password</label>
                    </div>
                </div>
                <a class="waves-effect waves-light btn" onClick={this.handleCreateUser}>New User</a>
                <a class="waves-effect waves-light btn" onClick={this.handleLogin}>SingIn</a>
            </form>
        );
    }
}

export default Authenticate;
