import React, { useState } from "react";
import { Row, Col } from '../_library/Containers';
import { InputRadio, InputText, InputDate, TextArea } from '../_library/Inputs';
import { AddPlantFormCarry } from './AddPlantFormCarry';
import { Header } from '../_library/Headers';
import { Button } from '../_library/Buttons';
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

export const AddPlantForm = () => {
    const [formValues, setFormValues] = useState({
        plantType: '',
        plantName: '',
        date: '',
        water: '',
        mist: '',
        fertilize: '',
        informations: '',
    });

    const handlePlantType = (event) => {
        setFormValues({...formValues, plantType: event.target.id})
    }

    const handleInputChange = (event) => {
        event.persist();
        setFormValues({...formValues, [event.target.id]: event.target.value});
    }

    return (
        <>
            <Header size={2} marginBottom={1}>Wybierz typ</Header>
            <Row marginBottom={1}>
                <InputRadio id={plantID.icon1} label={<PlantIconImg1/>} name={'plant'} onChange={handlePlantType}/>
                <InputRadio id={plantID.icon2} label={<PlantIconImg2/>} name={'plant'} onChange={handlePlantType}/>
                <InputRadio id={plantID.icon3} label={<PlantIconImg3/>} name={'plant'} onChange={handlePlantType}/>
                <InputRadio id={plantID.icon4} label={<PlantIconImg4/>} name={'plant'} onChange={handlePlantType}/>
                <InputRadio id={plantID.icon5} label={<PlantIconImg5/>} name={'plant'} onChange={handlePlantType}/>
                <InputRadio id={plantID.icon6} label={<PlantIconImg6/>} name={'plant'} onChange={handlePlantType}/>
                <InputRadio id={plantID.icon7} label={<PlantIconImg7/>} name={'plant'} onChange={handlePlantType}/>
                <InputRadio id={plantID.icon8} label={<PlantIconImg8/>} name={'plant'} onChange={handlePlantType}/>
                <InputRadio id={plantID.icon9} label={<PlantIconImg9/>} name={'plant'} onChange={handlePlantType}/>
                <InputRadio id={plantID.icon10} label={<PlantIconImg10/>} name={'plant'} onChange={handlePlantType} />
            </Row>

            <Row marginBottom={3}>
                <Col size={20}>
                    <Header size={2} marginBottom={1}>Roślina</Header>
                    <InputText label={'Nazwa'} id={'plantName'} onChange={handleInputChange} marginBottom={1} />
                    <InputDate label={'Data nabycia'} id={'date'} onChange={handleInputChange} />
                </Col>
                <Col size={20}>
                    <Header size={2} marginBottom={1}>Opieka</Header>
                    <AddPlantFormCarry text={'Podlewanie co '} id={'water'} onChange={handleInputChange} />
                    <AddPlantFormCarry text={'Zraszanie co '} id={'mist'} onChange={handleInputChange} />
                    <AddPlantFormCarry text={'Nawożenie co '} id={'fertilize'} onChange={handleInputChange} />
                </Col>
                <Col size={20}>
                    <Header size={2} marginBottom={1}>Dodatkowe informacje</Header>
                    <TextArea
                        id={'informations'}
                        placeholder={'Wpisz informacje odnośnie pielęgnacji rośliny'}
                        onChange={handleInputChange}
                    />
                </Col>
            </Row>
            <Button text={'DODAJ'} onClick={() => console.log(formValues)}/>
        </>
    );
};