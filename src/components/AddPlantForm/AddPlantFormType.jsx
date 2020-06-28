import React from 'react';
import { InputRadio } from '../_library/Inputs';
import { Row } from '../_library/Containers';
import { Header } from '../_library/Headers';
import { colors } from '../../helpers/colors';
import { 
    plantID, 
    PlantIconImg1, 
    PlantIconImg2,
    PlantIconImg3, 
    PlantIconImg4, 
    PlantIconImg5, 
    PlantIconImg6, 
    PlantIconImg7, 
    PlantIconImg8, 
    PlantIconImg9, 
    PlantIconImg10
} from './AddPlantForm.helpers'

export const AddPlantFormType = ({onPlantTypeChange, plantType, isFormSubmitted}) => {
    return (
        <>
            <Header size={2} marginBottom={1}>Wybierz typ</Header>
            <Row marginBottom={1}>
                <InputRadio id={plantID.icon1} label={<PlantIconImg1/>} name={'plant'} onChange={onPlantTypeChange}/>
                <InputRadio id={plantID.icon2} label={<PlantIconImg2/>} name={'plant'} onChange={onPlantTypeChange}/>
                <InputRadio id={plantID.icon3} label={<PlantIconImg3/>} name={'plant'} onChange={onPlantTypeChange}/>
                <InputRadio id={plantID.icon4} label={<PlantIconImg4/>} name={'plant'} onChange={onPlantTypeChange}/>
                <InputRadio id={plantID.icon5} label={<PlantIconImg5/>} name={'plant'} onChange={onPlantTypeChange}/>
                <InputRadio id={plantID.icon6} label={<PlantIconImg6/>} name={'plant'} onChange={onPlantTypeChange}/>
                <InputRadio id={plantID.icon7} label={<PlantIconImg7/>} name={'plant'} onChange={onPlantTypeChange}/>
                <InputRadio id={plantID.icon8} label={<PlantIconImg8/>} name={'plant'} onChange={onPlantTypeChange}/>
                <InputRadio id={plantID.icon9} label={<PlantIconImg9/>} name={'plant'} onChange={onPlantTypeChange}/>
                <InputRadio id={plantID.icon10} label={<PlantIconImg10/>} name={'plant'} onChange={onPlantTypeChange} />
            </Row>
            {isFormSubmitted && !plantType && <PlantTypeErrorMessage />}
        </>
    )
}

export const PlantTypeErrorMessage = () => {
    const style = {
        color: colors.russianRed,
        display: 'block',
        fontSize: '.8rem',
        margin: '-1rem 0 1rem 0',
    }

    return (
        <Row>
            <span style={style}>Wybierz typ rośliny.</span>
        </Row>
    )
}