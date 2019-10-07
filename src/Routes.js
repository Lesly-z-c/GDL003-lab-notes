import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Aut from './Aut'
import Create from './Create'
import Register from './Register'
import Logout from './Logout';
import Delete from './Delete';


 const Routes = () => {
     return (
         <Switch>
            <Route exact path= '/' component= {Aut} />
            <Route path='/create' component = {Create}/>  
            <Route path='/delete' component = {Delete}/> 
            <Route path='/register' component = {Register}/>      
            <Route path='/logout' component = {Logout}/> 
       
        
         </Switch>
     );
 }  


 export default Routes;