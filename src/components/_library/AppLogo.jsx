import React from 'react';
import { colors } from '../../helpers/colors';

export const AppLogo = () => {
    const containerStyle = {
        color: colors.arcticSnow,
        padding: '1rem 0',
    }
    
    const logoImgStyle = {
        marginLeft: '2rem',
        width: '80px',
    }
    
    const logoTitleStyle = {
        fontFamily: 'ShadowsIntoLightTwo',
        fontSize: '1.5rem',
        fontWeight: 'lighter',
        letterSpacing: '.2rem',
        lineHeight: '1',
        margin: '0',
        textAlign: 'center',
    }
    
    return (
        <div style={containerStyle}>
            <img src={'appLogo.png'} alt={'app_logo'} style={logoImgStyle} />
            <h1 style={logoTitleStyle}>PlantCare</h1>
        </div>
    )
}

