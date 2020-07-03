import React from 'react';
import { Row, Col } from '../_library/Containers';
import { InputText, InputInline, InputDate, TextArea } from '../_library/Inputs';
import { Header } from '../_library/Headers';
import { colors } from '../../helpers/colors';

export const AddPlantFormInfo = ({onInputChange, values, isFormSubmitted}) => {
    return (
        <Row marginBottom={3}>
            <Col size={20}>
                <Header size={2} marginBottom={1}>Roślina</Header>
                <InputText 
                    label={'Nazwa'} 
                    id={'plantName'} 
                    onChange={onInputChange} 
                    marginBottom={1}
                    error={isFormSubmitted && values.plantName.trim().length === 0}
                />
                <InputDate 
                    label={'Data nabycia'} 
                    id={'date'} 
                    onChange={onInputChange} 
                    error={isFormSubmitted && values.date.trim().length === 0}
                />
            </Col>
            <Col size={20}>
                <Header size={2} marginBottom={1}>Opieka</Header>
                <InputInline 
                    marginBottom={1} 
                    maxInputLength={3} 
                    textBefore={'Podlewanie co '} 
                    textAfter={'dni'} 
                    id={'water'} 
                    onChange={onInputChange} 
                    error={isFormSubmitted && values.water.trim().length === 0}
                />
                <InputInline 
                    marginBottom={1} 
                    maxInputLength={3} 
                    textBefore={'Zraszanie co '} 
                    textAfter={'dni'} 
                    id={'mist'} 
                    onChange={onInputChange} 
                    error={isFormSubmitted && values.mist.trim().length === 0}
                />
                <InputInline 
                    marginBottom={1} 
                    maxInputLength={3} 
                    textBefore={'Nawożenie co '}
                    textAfter={'dni'} 
                    id={'fertilize'} 
                    onChange={onInputChange} 
                    error={isFormSubmitted && values.fertilize.trim().length === 0}
                />
                {isFormSubmitted 
                    && (values.water.trim().length === 0 || values.mist.trim().length === 0 || values.fertilize.trim().length === 0) 
                    && <PlantCarryErrorMessage />
                }
            </Col>
            <Col size={20}>
                <Header size={2} marginBottom={1}>Dodatkowe informacje</Header>
                <TextArea
                    id={'information'}
                    placeholder={'Wpisz informacje odnośnie pielęgnacji rośliny'}
                    onChange={onInputChange}
                />
            </Col>
        </Row>
    )
}

export const PlantCarryErrorMessage = () => {
    const style = {
        color: colors.russianRed,
        display: 'block',
        fontSize: '.8rem',
    }

    return <span style={style}>Podaj wymagane informacje.</span>
}