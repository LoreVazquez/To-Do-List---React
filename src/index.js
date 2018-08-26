import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import firebase from 'firebase'
//import registerServiceWorker from './registerServiceWorker'; // Servio que corre en el compu o cel cierto tiempo y va verificando actualizaciones aplicaciones progresivas


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCc3PFAqDxVRK-GXw8lrGcc0QH8f1l--WY",
    authDomain: "react-todolist-e53b4.firebaseapp.com",
    databaseURL: "https://react-todolist-e53b4.firebaseio.com",
    projectId: "react-todolist-e53b4",
    storageBucket: "react-todolist-e53b4.appspot.com",
    messagingSenderId: "378134105513"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
