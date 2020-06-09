import React from 'react';

export const PageHeader = (props) => {
    const style = {
        fontSize:'1.5rem',
        fontWeight:'lighter',
        marginBottom: '2rem',
    }
    return (
        <h1 style={style}>{props.title}</h1>
    )
}