import React from 'react';

export const Break = ({lines}) => {
    const style = {
        minHeight: lines ? `${lines}rem` : '1rem',
    }
    return (
        <div style={style}></div>
    )
}