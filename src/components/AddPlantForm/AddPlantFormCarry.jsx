import React from 'react';
import { textStyle, inputStyle } from './AddPlantForm.styles';
import { Row } from '../_library/Containers';

export const AddPlantFormCarry = (props) => {
    return (
        <Row marginBottom={1}>
            <span style={textStyle}>{props.text}</span>
            <input type={'text'} id={props.id} style={inputStyle} maxLength={3} onChange={props.onChange}/>
            <span style={textStyle}>dni</span>
        </Row>
    )
} 