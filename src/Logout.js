import React, { Component } from 'react';
import firebase from "firebase/app";

export default class Logout extends Component {

    
  authListener() {
    firebase.auth ().onAuthStateChanged (function (user) { 
      console.log(user.displayName)
      console.log(user.uid)

    });
    }

    componentDidMount() {
      this.authListener();
    }

    render() {

        return <center>
           <button onClick={() => this.onLogoutClicked()}>Log out</button>
     
        </center>
    }
}