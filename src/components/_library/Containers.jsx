import React from 'react';
import { colors } from '../../helpers/colors';

export const NavContainer = (props) => {
    const wrapper = {
        backgroundColor: colors.amazonGreen,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'fixed',
        width: '160px',
    }

    return (
        <div style={wrapper}>
            {props.children}
        </div>
    )
}

export const ViewContainer = (props) => {
    const style = {
        height: 'calc(100vh - 6rem)',
        marginLeft: '10rem',
        padding: '3rem',
    }

    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

export const Col = (props) => {
    const style = {
        borderRight: `1px solid ${props.borderRight}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: props.justify,
        marginRight: `${props.marginRight}rem`,
        alignItems: props.align,
        width: `${props.size}rem`, 
    }

    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

export const Row = (props) => {
    const style = {
        display: 'flex',
        marginBottom: `${props.marginBottom}rem`,
    }

    return (
        <div style={style}>
            {props.children}
        </div>
    )
}