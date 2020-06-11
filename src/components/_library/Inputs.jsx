import React from 'react';
import { Row } from './Containers';
import { colors } from '../../helpers/colors';

export const InputText = (props) => {
    const labelStyle = {
        color: colors.icelandicSky,
        display: 'block',
    }

    const inputStyle = {
        backgroundColor: colors.scottishSky,
        border: 'none',
        borderRadius: '3px 3px 0px 0px',
        boxShadow: `0 1px 3px ${colors.icelandicSky}`,
        marginRight: '1.5rem',
        padding: '.5rem 1rem',
        minWidth: '180px',
    }

    return (
        <div>
            <label htmlFor={props.id} style={labelStyle}>
                {props.label}
            </label>
            <input 
                type={'text'} 
                id={props.id} 
                placeholder={props.placeholder}
                style={inputStyle}
                onChange={props.onChange}
            />
        </div>
    )
}

export const InputDate = (props) => {
    const labelStyle = {
        color: colors.icelandicSky,
        display: 'block',
    }

    const inputStyle = {
        backgroundColor: colors.scottishSky,
        border: 'none',
        borderRadius: '3px 3px 0px 0px',
        boxShadow: `0 1px 3px ${colors.icelandicSky}`,
        color: colors.icelandicSky,
        marginRight: '1.5rem',
        minWidth: '180px',
        padding: '.4rem 1rem',
    }

    return (
        <div>
            <label htmlFor={props.id} style={labelStyle}>
                {props.label}
            </label>
            <input type={'date'} id={props.id} style={inputStyle} onChange={props.onChange} />
        </div>
    )
}

export const InputRadio = (props) => {
    const style = {
        backgroundColor: colors.scottishSky,
        borderRadius: '3px',
        boxShadow: `0 1px 3px ${colors.icelandicSky}`,
        color: colors.icelandicSky,
        cursor: 'pointer',
        marginRight: '1.5rem',
        padding: '.5rem 1rem',
    }

    return (
        <label style={style} htmlFor={props.id}>
            <input 
                type={'radio'} 
                id={props.id} 
                name={props.name} 
                onChange={props.onChange}
                checked={props.checked} 
                value={props.value}
            />
            {props.label}
        </label>
    )
}

export const InputCheckbox = (props) => {
    const labelStyle = {
        color: colors.icelandicSky,
        marginRight: '1.5rem',
    }

    return (
        <Row>
            <input type={'checkbox'} id={props.id} />
            <label htmlFor={props.id} style={labelStyle}>
                {props.label}
            </label>
        </Row>
    )
}