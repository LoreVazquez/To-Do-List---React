import React, { Component } from 'react';// En cada componente se debe de importar React
import Authenticate from './Authenticate';
import firebase from 'firebase';
import List from './List';

class App extends React.Component {
  constructor(props){
    super(props);
    //Solo en un constructor se puede usar state en los demas se usa setState
    this.state={
      user: null,
    }
  
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.setState({user:user});
      } else {
        this.setState({user:null});
      }
    });
  }
  // Se pintan los componentes si el estado se cumple
  render(){
    const component = this.state.user ? <List user={this.state.user}/> : <Authenticate />;
    return (
      <main>
        {component}
      </main>
    );
  }
 
}

//Se exporta para que pueda ser utilizada en otro archivo
export default App;
