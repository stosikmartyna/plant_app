import React from 'react';

export const Header = (props) => {
    const style = {
        marginBottom: `${props.marginBottom}rem`,
    }

    const h1Style = {
        ...style,
        fontFamily: 'ShadowsIntoLightTwo',
        fontSize: '3rem',
        fontWeight: 'lighter',
        letterSpacing: '.3rem',
        textAlign: 'center',
    }

    switch (props.size) {
        case 1:
            return <h1 style={h1Style}>{props.children}</h1>
        case 2:
            return <h2 style={style}>{props.children}</h2>
        case 3:
            return <h3 style={style}>{props.children}</h3>
        case 4:
            return <h4 style={style}>{props.children}</h4>
        case 5:
            return <h5 style={style}>{props.children}</h5>
        case 6:
            return <h6 style={style}>{props.children}</h6>
        default:
            return null;
    }
}