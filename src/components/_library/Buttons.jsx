import React, { useState } from 'react';
import { colors } from '../../helpers/colors';

export const Button = (props) => {
    const [isHover, setIsHover] = useState(false)

    const setHover = () => setIsHover(true);
    const unsetHover = () => setIsHover(false);

    const style = {
        backgroundColor: isHover ? colors.amazonGreenHover : colors.amazonGreen,
        border: 'none',
        borderRadius: '3px',
        color: colors.arcticSnow,
        cursor: 'pointer',
        fontFamily: 'Raleway',
        letterSpacing: '.1rem',
        margin: props.justify === 'center' && '0 auto',
        marginBottom: `${props.marginBottom}rem`,
        padding: '.7rem 2rem',
        width: 'max-content'
    }

    return (
        <button 
            style={style} 
            onClick={props.onClick} 
            onMouseOver={setHover} 
            onMouseOut={unsetHover}
            type={props.type}
        >
            {props.text}
        </button>
    )
}