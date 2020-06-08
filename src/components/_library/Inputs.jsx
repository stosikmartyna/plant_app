import React from 'react';
import { FlexContainer } from './Containers';

export const InputText = (props) => {
    const labelStyle = {
        display: 'block',
    }

    const inputStyle = {
        marginRight: '1.5rem',
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
        display: 'block',
    }

    const inputStyle = {
        marginRight: '1.5rem',
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
    const labelStyle = {
        marginRight: '1.5rem',
    }

    return (
        <>
            <input type={'radio'} id={props.id} name={props.name} />
            <label for={props.id} style={labelStyle}>
                {props.label}
            </label>
        </>
    )
}

export const InputCheckbox = (props) => {
    const labelStyle = {
        marginRight: '1.5rem',
    }

    return (
        <FlexContainer>
            <input type={'checkbox'} id={props.id} />
            <label for={props.id} style={labelStyle}>
                {props.label}
            </label>
        </FlexContainer>
    )
}