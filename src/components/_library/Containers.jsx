import React from 'react';
import { colors } from '../../helpers/colors';

export const NavContainer = (props) => {
    const wrapper = {
        backgroundColor: colors.amazonGreen,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: props.justify,
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
        backgroundImage: `url("${props.background}")`,
        backgroundSize: '100% 100%',
        display: props.justifyHorizontally ? 'flex' : 'block',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 'calc(100vh - 3rem)',
        marginLeft: '10rem',
        overflow: 'auto',
        padding: '1.5rem 3rem',
    }

    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

export const Col = (props) => {
    const style = {
        alignItems: props.align,
        borderRight: `1px solid ${props.borderRight}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: props.justify,
        marginRight: `${props.marginRight}rem`,
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
        flexWrap: props.wrap ? 'wrap' : 'nowrap',
        justifyContent: props.justify,
        marginBottom: `${props.marginBottom}rem`,
    }

    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

export const Box = ({children, marginBottom, width}) => {
    const style = {
        backgroundColor: 'rgba(255, 255, 255, 0.644)',
        borderRadius: '10px',
        boxShadow: `0 1px 3px ${colors.icelandicSky}`,
        marginBottom: `${marginBottom}rem`,
        padding: '2rem 3rem',
        width: `${width}rem`,
    }

    return (
        <div style={style}>
            {children}
        </div>
    )
}

export const SignContainer = ({children}) => {
    const style = {
        alignItems: 'center',
        backgroundColor: colors.arcticSnowTransparent,
        border: `3px solid ${colors.pastelRose}`,
        borderRadius: '10px',
        margin: 'auto',
        minWidth: '332px',
        padding: '4rem',
        width: 'min-content',
    }
    
    return (
        <div style={style}>
            {children}
        </div>
    )
}