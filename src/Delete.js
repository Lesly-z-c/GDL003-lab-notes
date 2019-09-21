import React, { Component } from 'react';
import firebase from "firebase/app";
import  "firebase/firestore";
//import ".Create.js"
import Supr from './img/delete.png';


class Delete extends Component {
constructor (props) {
    super(props) 
    this.state   = {
        note : ''
    }
 
}
delete = id => {
  
    this.ref = firebase.firestore().collection("note").doc(id).delete().then(()=>{
           console.log("delete");
           // pinta objeto feo :(
         // console.log(`${this.state.note}`)
          /*this.setState({
           note
       });*/
          
       }).catch((error)=>{
           console.log(error);
       })
}



 render () {

     return(
    <div>
                 
   
              <button className='delete' onClick= {() => this.delete(this.props.id)}> <img alt='' src={Supr}></img> </button>
                    
    </div>
 )}
}
 export default Delete;