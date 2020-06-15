import React, { useState } from 'react';
import { colors } from '../../helpers/colors';

export const Button = (props) => {
    const [isHover, setIsHover] = useState(false)

    const setHover = () => setIsHover(true);
    const unsetHover = () => setIsHover(false);

    const style = {
        backgroundColor: isHover ? colors.brazilianCoffeeHover : colors.brazilianCoffee,
        border: 'none',
        borderRadius: '3px',
        color: colors.arcticSnow,
        cursor: 'pointer',
        fontFamily: 'Raleway',
        marginBottom: '2rem',
        padding: props.isSmall ? '.3rem .8rem' : '.5rem 1rem',
        width: 'max-content'
    }

    return (
        <button 
            style={style} 
            onClick={props.onClick} 
            onMouseOver={setHover} 
            onMouseOut={unsetHover}
        >
            {props.text}
        </button>
    )
}