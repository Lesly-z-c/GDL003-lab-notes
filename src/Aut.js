import React, { Component } from 'react';
import firebase from "firebase/app";
import './index.css';
import Google from './img/search.png';
import Facebook from './img/facebook.png';
import Email from './img/email.png';
import logopin from './img/pinlogo.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
            <img src= {logopin} className="logo" ></img>
            <h1>Notes</h1>
            <button className="google" onClick={() => this.onGoogleSignInClicked()}><img id= "goo"src= {Google}></img><Link to='/create'>Sign in with Google</Link> </button>
            <button className="facebook" onClick={() => this.onFacebook()}><img id= "fa"src= {Facebook}></img><Link to='/create'>Sign in with Facebook</Link> </button>
            <button className="e-mail" onClick={() => this.onFacebook()}><img id= "mail" src= {Email}></img> <Link to='/create'>Sign in with Email</Link> </button>
            
      
        </center>
    }
}

