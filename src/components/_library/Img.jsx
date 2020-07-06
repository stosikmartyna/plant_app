import React from 'react';
import { colors } from '../../helpers/colors';

export const Img = (props) => {
    const style = {
        borderRadius: '3px',
        boxShadow: `0 1px 4px ${colors.icelandicSky}`,
        marginBottom: `${props.marginBottom}rem`,
    }

    return (
        <img 
            src={props.src}
            alt={props.alt}
            style={style} 
            width={'100%'}
            height={'200px'}
        />
    )
}