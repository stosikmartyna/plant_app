import React from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';

export const NavbarLink = (props) => {
    return (
        <Link to={props.path}>
            {props.icon}
            <span>
                {props.title}
            </span>
        </Link>
    )
}