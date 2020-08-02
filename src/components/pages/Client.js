import React from "react";
import Todo from "./Todo.js";
import ToRead from "./ToRead.js";
import Tabs from "../layouts/Tabs.js";
import {BrowserRouter as Router, Route, Switch}from 'react-router-dom';


function Client(){
    return(
        <div className="client">
      <Router>
           <h1 className="pt-4 head">ACTION ITEMS</h1>
           <Tabs/>
           <Switch>
               <Route exact path='/' component={Todo}/>
               <Route exact path='/ToRead' component={ToRead}/>
           </Switch> 
      </Router>
      </div>
    )
}
export default Client;
