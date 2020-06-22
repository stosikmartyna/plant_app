import React from 'react';
import { colors } from '../../helpers/colors';

export const Link = (props) => {
    const style = {
        color: colors.amazonGreen,
        textAlign: props.justify === 'center' && 'center',
        textDecoration: 'none',
    }

    return <a href={props.to} style={style}>{props.children}</a>
}