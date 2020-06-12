import React, { useState } from "react";
import {
    InputText,
    InputDate,
    InputRadio,
} from "../_library/Inputs";
import { Button } from "../_library/Buttons";
import { Col, Row } from "../_library/Containers";
import { Header } from "../_library/Headers";
import { TransportSectionForm } from "./TransportSectionForm";

export const AddTravelForm = () => {
    const [inputsValues, setInputsValues] = useState({
        tripType: 'single',
        dateFrom: '',
        dateTo: '',
        wherePlace: '',
        whereCoutry: '',
    });

    const handleTripType = (event) => {
        setInputsValues({...inputsValues, tripType: event.target.value})
    }

    const handleInputChange = (event) => {
        event.persist();
        setInputsValues({...inputsValues, [event.target.id]: event.target.value});
    }

    const isTripSingle = inputsValues.tripType === 'single';
    const isTripRound = inputsValues.tripType === 'round';

    return (
        <form>
            <Header size={2} marginBottom={1}>
                Trip
            </Header>
            <Row marginBottom={2}>
                <InputRadio 
                    id={"singleTrip"} 
                    name={"trip"} 
                    label={"Single"} 
                    onChange={handleTripType} 
                    value={'single'} 
                    checked={isTripSingle} 
                />
                <InputRadio 
                    id={"roundTrip"} 
                    name={"trip"} 
                    label={"Round"} 
                    onChange={handleTripType} 
                    value={'round'} 
                    checked={isTripRound}
                />
            </Row>
            <Row>
                <Col>
                    <Header size={2} marginBottom={1}>
                        When
                    </Header>
                    <Row marginBottom={2}>
                        <InputDate id={"dateFrom"} label={"Date from"} onChange={handleInputChange} />
                        <InputDate id={"dateTo"} label={"Date to"} onChange={handleInputChange} />
                    </Row>
                </Col>

                <Col>
                    <Header size={2}  marginBottom={2.2}>
                        Where
                    </Header>
                    <Row>
                        <InputText 
                            id={"wherePlace"} 
                            placeholder={"City, place, etc..."} 
                            onChange={handleInputChange} 
                        />
                        <InputText 
                            id={"whereCoutry"} 
                            placeholder={"Country"} 
                            onChange={handleInputChange} 
                        />
                    </Row>
                </Col>
            </Row>

            {isTripRound && (
                <Button text={"Add more places"} />
            )}
            
            <TransportSectionForm />
        </form>
    );
};
