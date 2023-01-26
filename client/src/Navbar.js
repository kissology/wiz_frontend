import React from 'react';
import { Link } from 'react-router-dom';


function Navbar(){
    return (
    <nav>
    <div>
    <Link exact path to="/">
            Login
        </Link>
        <br></br>
        <Link exact path to="/home">
            Home
        </Link>
        <br></br>
        <Link exact path to="/restrooms">
            Restrooms
        </Link>
        <br></br>
        <Link exact path to="/about">
            About
        </Link>
    </div>
    </nav>
)}

export default Navbar;