import React from 'react';
import {Link} from 'react-router-dom';
import {Icon} from 'react-icons-kit';

import './Navbar.css';

export const NavbarLink = (props) => {
    return (
        <Link to={props.path}>
            <Icon icon={props.icon} size={36} />
            <span>
                {props.title}
            </span>
        </Link>
    )
}