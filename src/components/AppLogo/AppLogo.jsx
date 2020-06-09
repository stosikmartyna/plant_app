import React from 'react';

export const AppLogo = () => {
    return (
        <div style={appLogoStyle}>
            <img src={'appLogo.png'} alt={'app_logo'} style={appLogoImgStyle} />
            <h1 style={appNameStyle}>TravelApp</h1>
        </div>
    )
}

const appLogoStyle = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '140px',
    justifyContent: 'space-evenly',
}

const appLogoImgStyle = {
    textAlign: 'center',
    width: '80px',
}

const appNameStyle = {
    fontFamily: 'ShadowsIntoLightTwo',
    fontSize: '1.5rem',
    fontWeight: 'lighter',
    letterSpacing: '.1rem',
    margin: '0',
}