import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {

    const activeStyle = { color: "red" }

    return (
        <nav>
            <NavLink to="/" exact activeStyle={activeStyle}>Home</NavLink>
            {" | "}
            <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
            {" | "}
            <NavLink to="/courses" activeStyle={activeStyle}>Courses</NavLink>
        </nav>
    );
}

export default Header;