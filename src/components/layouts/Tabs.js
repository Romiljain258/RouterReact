import React from "react";
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Tabs(){
    return(
        <div >
    <Nav className="nav">
    <li className="nav=item" >
        <Link className="nav-link" to="/">Todo
        </Link>
    </li>   
    <li className="nav=item">
        <Link className="nav-link" to="/ToRead">To Read
        </Link>
    </li>
    </Nav>
    </div>
    )
}

export default Tabs;