import React from 'react';
import AddForm from './AddForm';
import TaskList from './TaskList';
import firebase from 'firebase';

class List extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        tasks: []
      }
      //Base de datos de firebase
      const db = firebase.database();
      this.tasksRef = db.ref().child(`tasks/${this.props.user.uid}`);

      this.handleAddTask = this.handleAddTask.bind(this);

      this.handleChildAdded = this.handleChildAdded.bind(this);
      //this.handleChildChanged = this.handleChildChanged.bind(this);
      //this.handleChildDeleted = this.handleChildDeleted.bind(this);
      
    }
    componentDidMount(){
      this.tasksRef.on('child_added', this.handleChildAdded);
    }

    handleAddTask(text){
      if(!text.length){
        return;
      }
      // Agrega el elemento al arbolito de datos de firebase
      const key = this.tasksRef.push().key;
      this.tasksRef.child(key).set({
        text:text,
        done: false
      });
    }

    handleChildAdded(data){
      const newTask = data.val();
      newTask.id = data.key;
      var newTasks = this.state.tasks.concat(newTask);
      this.setState({tasks: newTasks});
    }
  
    render() {
      return (
        <div>
          <h1>To Do List</h1>
          <a class="waves-effect waves-light btn"onClick={()=>firebase.auth().signOut()}>LogOut</a>
          <AddForm onAdd = {this.handleAddTask}/>  
          <TaskList tasks={this.state.tasks} onDelete={this.handleDelete} onEdit={this.handleEdit} onCheck={this.handleCheck} />        
        </div>
      );
    }
  }

  export default List;
