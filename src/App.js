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

  render(){
    const component = this.state.user ? <List user={this.state.user}/> : <Authenticate />;

    return (
      <main>
        {component}
      </main>
    );
  }
 
}

/*function List(props){
  return (
    <section>
    <h1>{props.user.email}</h1>
    <button type="button" onClick={()=>firebase.auth().signOut()}>LogOut</button>;
  </section>
  )
}*/
export default App;
