import React, { useState } from 'react';
import { colors } from '../../helpers/colors';

export const Button = (props) => {
    const [isHover, setIsHover] = useState(false)

    const setHover = () => setIsHover(true);
    const unsetHover = () => setIsHover(false);

    const style = {
        backgroundColor: props.small 
            ? isHover ? colors.norwegianSkyHover : colors.norwegianSky
            : isHover ? colors.amazonGreenHover : colors.amazonGreen,
        border: 'none',
        borderRadius: '3px',
        color: props.small ? colors.icelandicSky : colors.arcticSnow,
        cursor: 'pointer',
        display: props.justify === 'center' && 'block',
        fontFamily: 'Raleway',
        letterSpacing: '.1rem',
        margin: props.justify === 'center' && '0 auto',
        marginBottom: `${props.marginBottom}rem`,
        padding: props.small ? '.4rem .8rem' : '.7rem 2rem',
        width: 'max-content',
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