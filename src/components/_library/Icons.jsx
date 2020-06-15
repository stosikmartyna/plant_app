import React from 'react';
import { Icon } from 'react-icons-kit';
import { colors } from '../../helpers/colors';
import { remove } from 'react-icons-kit/fa/remove';

export const IconRemove = (props) => {
    const style = {
        color: colors.britishSky, 
        marginTop: '1.8rem'
    }

    return <Icon icon={remove} size={20} style={style} onClick={props.onClick} />
}