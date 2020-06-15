import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { colors } from '../../helpers/colors';

export const NavbarLink = (props) => {
    const [isHover, setIsHover] = useState(false)

    const setHover = () => setIsHover(true);
    const unsetHover = () => setIsHover(false);

    const linkStyle = {
        backgroundColor: isHover && colors.amazonGreenHover,
        color: colors.arcticSnow,
        fontSize: '.8rem',
        letterSpacing: '.1rem',
        padding: '.8rem 0',
        textAlign: 'center',
        textDecoration: 'none',
        textTransform: 'uppercase',
    }

    const linkName = {
        display: 'block',
        marginTop: '.6rem',
    }

    return (
        <Link to={props.path} style={linkStyle}>
            <div onMouseOver={setHover} onMouseOut={unsetHover}>
                <Icon icon={props.icon} size={36} />
                <span style={linkName}>
                    {props.title}
                </span>
            </div>
        </Link>
    )
}