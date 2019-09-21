import React, { Component } from 'react';
import firebase from "firebase/app";
import  "firebase/firestore";
//import ".Create.js"
//import Delete from "./Delete";
import Update from './img/edit.png';


class Edit extends Component {
constructor (props) {
    super(props) 
    this.state   = {
        note : '',
  
    }
 
}





 update = id => {
     firebase.firestore().collection('note').doc((id).update({   
        note : this.state.note,
        autorid: firebase.auth().currentUser.uid,
        nombre:firebase.auth().currentUser.displayName,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    
       
   }).then(()=>{
       console.log("note added");
       // pinta objeto feo :(
     // console.log(`${this.state.note}`)
      /*this.setState({
       note
   });*/
      
   }).catch((error)=>{
       console.log(error);
   })
     )}
 
 
 render () {

     return(
   
    <div>
    <form> 
        
        <button className="edit" type="submit" onClick={this.update}> <img src= {Update}></img> </button>
    
    </form>
    </div>
 )}
}
 export default Edit;