import React from 'react';
import { Row, Col } from '../_library/Containers';
import { InputText, InputInline, InputDate, TextArea } from '../_library/Inputs';
import { Header } from '../_library/Headers';

export const AddPlantFormInfo = ({onInputChange}) => {
    return (
        <Row marginBottom={3}>
            <Col size={20}>
                <Header size={2} marginBottom={1}>Roślina</Header>
                <InputText label={'Nazwa'} id={'plantName'} onChange={onInputChange} marginBottom={1} />
                <InputDate label={'Data nabycia'} id={'date'} onChange={onInputChange} />
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
                />
                <InputInline 
                    marginBottom={1} 
                    maxInputLength={3} 
                    textBefore={'Zraszanie co '} 
                    textAfter={'dni'} 
                    id={'mist'} 
                    onChange={onInputChange} 
                />
                <InputInline 
                    marginBottom={1} 
                    maxInputLength={3} 
                    textBefore={'Nawożenie co '}
                    textAfter={'dni'} 
                    id={'fertilize'} 
                    onChange={onInputChange} 
                />
            </Col>
            <Col size={20}>
                <Header size={2} marginBottom={1}>Dodatkowe informacje</Header>
                <TextArea
                    id={'informations'}
                    placeholder={'Wpisz informacje odnośnie pielęgnacji rośliny'}
                    onChange={onInputChange}
                />
            </Col>
        </Row>
    )
}