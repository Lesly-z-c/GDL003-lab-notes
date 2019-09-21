import React, { Component } from 'react';
import firebase from "firebase/app";
import './index.css';
import Google from './img/search.png';
import Facebook from './img/facebook.png';
import Email from './img/email.png';

export default class LoginView extends Component {

    onGoogleSignInClicked = () => {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(() => { console.log("google singin was successful") })
            .catch((error) => { console.log(error) });
    }
    onFacebook = () => {
      const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(FacebookAuthProvider)
          .then(() => { console.log("Facebook singin was successful") })
          .catch((error) => { console.log(error) });
  }
    

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
            <h1>Notes</h1>
            <button className="google" onClick={() => this.onGoogleSignInClicked()}> <img src= {Google}></img>Sign in with Google</button>
            <button className="facebook" onClick={() => this.onFacebook()}> <img src= {Facebook}></img> Sign in with Facebook</button>
            <button className="e-mail" onClick={() => this.onFacebook()}> <img src= {Email}></img> Sign in with Email</button>
            
      
        </center>
    }
}

