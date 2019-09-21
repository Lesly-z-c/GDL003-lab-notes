import React, { Component } from 'react';
import firebase from "firebase/app";

export default class Register extends Component {
  email = "" ;
  password = "";
    
    
    onLogoutClicked = () => {
        firebase.auth().signOut()
            .then(() => {
                console.log("log out has been successful")
            }).catch((error) => {
                console.log(error)
            })
    }
    onRegister = () => {
   console.log( `${this.email}`)
   firebase.auth().signInWithEmailAndPassword(this.email, this.password)
   .then(() => {console.log("succesful")})
   .catch ((error) => {
     firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
    .then(() => console.log("nouu"))
    .catch((error) => console.log(error))
  })
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
            
            <form >
              <input  placeholder = 'soyyo@gmail.com' label= "e-mail" type="e-mail"></input>
              <input type="password" ></input>
              <button type="button" onClick= {() => this.onRegister()}>Register </button>
            </form>

      
           
        </center>
    }
}
