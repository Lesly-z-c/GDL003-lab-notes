import React from 'react';
import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './SDK.js' ;
import Aut from './Aut'
import {
  FirebaseAuthProvider
} from "@react-firebase/auth";
import Create from "./Create";
import Delete from "./Delete";
import Edit from './Edit';
import Routes from './Routes';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

 

function App() {
  return (
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>

      <Routes>
        
      </Routes>
    </FirebaseAuthProvider>
 
  )
}


export default App;
