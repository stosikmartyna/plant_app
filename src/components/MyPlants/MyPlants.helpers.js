import React from 'react';

export const PlantIcon = (props) => {
    const imgStyle = {
        width: '160px',
    }
    
    return <img src={`/addPlantIcons/${props.icon}`} alt={`${props.name} icon`} style={imgStyle}/>
}