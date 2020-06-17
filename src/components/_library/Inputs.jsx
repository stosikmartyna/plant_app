import React from 'react';
import { Row } from './Containers';
import { colors } from '../../helpers/colors';

const commonInputStyle = {
    backgroundColor: colors.scottishSky,
    border: 'none',
    borderRadius: '3px 3px 0px 0px',
    boxShadow: `0 1px 3px ${colors.icelandicSky}`,
    color: colors.icelandicSky,
    fontFamily: 'Raleway',
    marginTop: '.3rem',
}

export const InputText = (props) => {
    const labelStyle = {
        color: colors.icelandicSky,
        display: 'block',
    }

    const inputStyle = {
        ...commonInputStyle,
        marginBottom: `${props.marginBottom}rem`,
        minWidth: '180px',
        padding: '.5rem 1rem',
        width: '70%',
    }

    return (
        <>
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
        </>
    )
}

export const InputDate = (props) => {
    const labelStyle = {
        color: colors.icelandicSky,
        display: 'block',
    }

    const inputStyle = {
        ...commonInputStyle,
        minWidth: '180px',
        padding: '.4rem 1rem',
        width: '70%',
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
    const labelStyle = {
        alignItems: 'center',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
    }

    const inputStyle = {
        marginTop: '1rem',
    }

    return (
        <label style={labelStyle} htmlFor={props.id}>
            {props.label}
            <input 
                type={'radio'} 
                id={props.id} 
                name={props.name} 
                onChange={props.onChange}
                checked={props.checked} 
                value={props.value}
                style={inputStyle}
            />
        </label>
    )
}

export const InputCheckbox = (props) => {
    const labelStyle = {
        color: colors.icelandicSky,
    }

    return (
        <Row marginBottom={1}>
            <input 
                type={'checkbox'} 
                id={props.id} 
                onChange={props.onChange} 
            />
            <label 
                htmlFor={props.id}
                style={labelStyle}
            >
                {props.label}
            </label>
        </Row>
    )
}

export const Select = (props) => {
    const labelStyle = {
        color: colors.icelandicSky,
        display: 'block',
    }

    const inputStyle = {
        ...commonInputStyle,
        minWidth: '210px',
        padding: '.4rem .7rem',
    }

    return (
        <>
            <label htmlFor={props.id} style={labelStyle}>
                {props.label}
            </label>
            <select name={props.name} id={props.id} onChange={props.onChange} style={inputStyle}>
                {props.options && props.options.map((option, index) => {
                    return <option key={index} value={option.value}>{option.name}</option>
                })}
            </select>
        </>
    )
}

export const TextArea = (props) => {
    const textAreaStyle = {
        ...commonInputStyle,
        maxHeight: '120px',
        maxWidth: '90%',
        minHeight: '80px',
        minWidth: '90%',
        padding: '.4rem .7rem',
    }
    return (
        <textarea id={props.id} onChange={props.onChange} placeholder={props.placeholder} style={textAreaStyle}>
            {props.text}
        </textarea>
    )
}