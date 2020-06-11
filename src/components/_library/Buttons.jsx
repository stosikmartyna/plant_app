import React from 'react';

export const Button = (props) => {
    const style = {
        backgroundColor: '#763f00',
        border: 'none',
        borderRadius: '3px',
        color: '#ffffff',
        cursor: 'pointer',
        fontFamily: 'Raleway',
        margin: '.5rem 0',
        width: 'max-content'
    }

    return (
        <button style={style}>
            {props.text}
        </button>
    )
}