import React from 'react';
import { colors } from '../../helpers/colors';

export const Text = (props) => {
    const style = {
        color: colors.thaiRainforest,
        display: 'block',
        lineHeight: '1.5',
        marginBottom: `${props.marginBottom}rem`,
    }

    return <span style={style}>{props.children}</span>
}

export const InlineText = (props) => {
    const style = {
        color: colors.thaiRainforest,
        lineHeight: '1.5',
    }

    return <span style={style}>{props.children}</span>
}