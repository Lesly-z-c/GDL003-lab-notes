import React, { Component } from 'react';
import firebase from "firebase/app";
import  "firebase/firestore";
import Delete from "./Delete";
import Edit from './Edit';
import './index.css';
import Send from './img/send.png';

 class Create extends Component {
    constructor(props) {
        super(props)
        this.state   = {
            note : '',
            notes: []
        }
       
        this.unsubscribe = null; 
    }

    handleChange = (event) => {
        this.setState({note: event.target.value})
    }

    
     add = e => {
         e.preventDefault();
         
         this.ref = firebase.firestore().collection('note').add({   
                 note : this.state.note,
                 autorid: firebase.auth().currentUser.uid,
                 nombre:firebase.auth().currentUser.displayName,
                 timeStamp: firebase.firestore.FieldValue.serverTimestamp()
             
                
            }).then((note)=>{
                console.log("note added");
                // pinta objeto feo :(
              // console.log(`${this.state.note}`)
               /*this.setState({
                note
            });*/
               
            }).catch((error)=>{
                console.log(error);
            })
     }

     componentDidMount(){
        let db = firebase.firestore();
        db.collection('note').onSnapshot((snapShots)=> {
            let notes =[];
            snapShots.docs.map(doc => {
               
                return   notes.push({...doc.data(), id: doc.id});
               
            })

            this.setState({notes: notes})
        })

        
 
    }



        
    render() { 

         return (


             <div>
                                
                    <label>{this.state.notes.map((note)=>{
                            //  console.log(note);
                        return (
                     <form className='allnote'>
                         
                         <Edit id={note.id}/> <Delete id={note.id}/> 
                        <p>{note.note}</p>
                       
                    </form>)
                    
                    })}</label>
                
                     <footer className='addnote'> 
                        <textarea className='textnote' onChange={e => this.handleChange(e)} />
                        <button   className='submit' type="submit" onClick={this.add} > <img src= {Send}></img></button>
                    </footer>
                
             </div>
         )  
     }
 }

 export default Create;