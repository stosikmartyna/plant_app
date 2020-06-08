import React from 'react';

export const Button = (props) => {
    const style = {
        margin: '.5rem 0',
        width: 'max-content'
    }

    return (
        <button style={style}>
            {props.text}
        </button>
    )
}