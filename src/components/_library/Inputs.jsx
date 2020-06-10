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
            <label for={props.id} style={labelStyle}>
                {props.label}
            </label>
            <input 
                type={'text'} 
                id={props.id} 
                placeholder={props.placeholder}
                style={inputStyle}
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
            <label for={props.id} style={labelStyle}>
                {props.label}
            </label>
            <input type={'date'} id={props.id} style={inputStyle} />
        </div>
    )
}

export const InputRadio = (props) => {
    const style = {
        backgroundColor: colors.scottishSky,
        borderRadius: '3px',
        boxShadow: `0 1px 3px ${colors.icelandicSky}`,
        color: colors.icelandicSky,
        marginRight: '1.5rem',
        padding: '.5rem 1rem',
    }

    return (
        <div style={style}>
            <input 
                type={'radio'} 
                id={props.id} 
                name={props.name} 
                onChange={props.onChange}
                checked={props.checked} 
                value={props.value}
            />
            <label for={props.id}>
                {props.label}
            </label>
        </div>
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
            <label for={props.id} style={labelStyle}>
                {props.label}
            </label>
        </Row>
    )
}