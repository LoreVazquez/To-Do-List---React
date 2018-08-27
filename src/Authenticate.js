import React from 'react';
import './App.css' //para agregar estilos
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
                <div className="row">
                    <h1 className="col l6 offset-l4 m8 offset-m3 s10 offset-s1">To Do List</h1>
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" value={this.state.email} onChange={this.handleEmailChange}/>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate" value={this.state.password} onChange={this.handlePasswordChange}/>
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div>{this.state.error}</div>
                <div className="row">
                    <a className="waves-effect waves-light btn col offset-s3" onClick={this.handleCreateUser}>New User</a>
                    <a className="waves-effect waves-light btn col offset-s1" onClick={this.handleLogin}>SingIn</a>
                </div>
            </form>
        );
    }
}

export default Authenticate;
