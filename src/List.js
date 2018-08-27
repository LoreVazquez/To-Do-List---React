import React from 'react';
import AddForm from './AddForm';
import TaskList from './TaskList';
import firebase from 'firebase';
import './App.css';

class List extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        tasks: []
      }
      //Base de datos de firebase
      const db = firebase.database();
      this.tasksRef = db.ref().child(`tasks/${this.props.user.uid}`);
      //eventos de los elementos que fueron creados en otros componentes que se le otorga al ancentro mas cercano
      this.handleAddTask = this.handleAddTask.bind(this);
      this.handleCheck = this.handleCheck.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleEdit = this.handleEdit.bind(this);

      //Manipulacion de la base de datos de firebase (eventos)
      this.handleChildAdded = this.handleChildAdded.bind(this);
      this.handleChildChanged = this.handleChildChanged.bind(this);
      this.handleChildDeleted = this.handleChildDeleted.bind(this);
      
    }
    componentDidMount(){
      this.tasksRef.on('child_added', this.handleChildAdded);
      this.tasksRef.on('child_changed', this.handleChildChanged);
      this.tasksRef.on('child_removed', this.handleChildDeleted);
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

    handleChildChanged(data){
      const newTask =data.val();
      newTask.id =data.key;
      const newTasks = this.state.tasks.concat([]);
      //Se encuentra la tarea que se esta modificando
      const index = newTasks.findIndex( task => task.id === data.key);
      //se elimina valor anterior y se reemplaza por el nuevo
      newTasks.splice(index,1,newTask);
      this.setState({tasks:newTasks});
    }

    handleChildDeleted(data){
      const newTasks = this.state.tasks.concat([]);
      //Se encuentra la tarea que se esta modificando
      const index = newTasks.findIndex( task => task.id === data.key);
      //se elimina valor anterior y se elimina
      newTasks.splice(index,1);
      this.setState({tasks:newTasks});
    }

    handleCheck(event){
      const parent = event.target.closest(".task");
      const tasksRef = this.tasksRef.child(parent.id);
      tasksRef.update({
        done:event.target.checked
      });
    }

    handleDelete(event){
      event.preventDefault();
      const parent = event.target.closest(".task");
      const tasksRef = this.tasksRef.child(parent.id);
      tasksRef.remove();
    }

    handleEdit(text,id){
      const tasksRef = this.tasksRef.child(id);
      tasksRef.update({
        text
      });
    }
  
    render() {
      return (
        <div>
          <div className="row">
            <h3 className="col s8">To Do List</h3>
            <a className="-col s2 waves-effect waves-light btn b-marg"onClick={()=>firebase.auth().signOut()}>LogOut</a>
          </div>
          <h5 className="center-align">Welcome: {this.props.user.email} !!</h5>
          <AddForm onAdd = {this.handleAddTask}/>  
          <TaskList tasks={this.state.tasks} onDelete={this.handleDelete} onEdit={this.handleEdit} onCheck={this.handleCheck} />        
        </div>
      );
    }
  }

  export default List;
