import React from 'react'; 
import {NavLink} from 'react-router-dom'; 
import './Nav.css'; 

function Nav() {

    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                {/* below is example of what not to do; "Link" by itself won't dynamically show use which page/site they are on w/in the navigation; "NavLink" does! */}
                {/* <li><Link to="/contact">Contact</Link></li> */}
            </ul>
        </nav>
    ); 
}

export default Nav; 