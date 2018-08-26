import React from 'react';
import firebase from 'firebase';

class List extends React.Component {
    constructor(props) {
      super(props);
      this.state = { tasks: []};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      //const db = firebase.database();
      //this.tasksRef = db.ref().child(`tasks/${this.props.user.uid}`);

    }
  
    render() {
      return (
        <div>
          <h3>Task List</h3>
          <button type="button" onClick={()=>firebase.auth().signOut()}>LogOut</button>;
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
            
            </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              Add #{this.state.items.length + 1}
            </button>
            <TaskList items={this.state.items} />
          </form>

        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
    }
  }

  ////


/*function List(props){
    const tasks = [
        {id: "1", text: "Example Task 1", isCheck: false},
        {id: "2", text: "Example Task 2", isCheck: false},
        {id: "3", text: "Example Task 3", isCheck: false},
    ];

    return(<section className="list">
        <h1>{props.user.email}</h1>
    <button type="button" onClick={()=>firebase.auth().signOut()}>LogOut</button>;

    <AddForm />
    <TaskList tasks = {tasks}/>
    </section> );
}*/

function AddForm(){
    return ( <div className="addForm">
                <input type="text"  value ="" />
                <button type="button">Add</button>
            </div> );
}

function TaskList(props) {
    return ( <ul>
                {props.items.map(item => (
                    <Task key={item.id} text={item.text} />
                ))}
            </ul> );
}

function Task(props) {
    return (
        <div>
        <li key={props.id}><input type="checkbox"
            checked={props.isChecked}/> {props.text}</li>
        </div>
    )
}
    


export default List;
