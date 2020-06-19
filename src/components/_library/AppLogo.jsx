import React from 'react';
import { colors } from '../../helpers/colors';

export const AppLogo = (props) => {
    const containerStyle = {
        color: props.titleColor || colors.arcticSnow,
        padding: '1rem 0',
        textAlign: 'center',
    }
    
    const logoImgStyle = {
        width: `${props.size}rem`,
    }
    
    const logoTitleStyle = {
        fontFamily: 'ShadowsIntoLightTwo',
        fontSize: `calc(${props.size}rem / 4)`,
        fontWeight: 'lighter',
        letterSpacing: '.2rem',
        lineHeight: '1',
    }
    
    return (
        <div style={containerStyle}>
            <img src={'appLogo.png'} alt={'app_logo'} style={logoImgStyle} />
            <h1 style={logoTitleStyle}>PlantCare</h1>
        </div>
    )
}

