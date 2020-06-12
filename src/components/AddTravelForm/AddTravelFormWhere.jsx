import React, { useState, useEffect} from 'react';
import { InputDate, InputText } from "../_library/Inputs";
import { Col, Row } from "../_library/Containers";
import { Header } from "../_library/Headers";
import { Button } from "../_library/Buttons";

export const AddTravelFormWhere = ({onInputChange, isTripRound}) => {
    const [destinationForms, setDestinationForms] = useState(['default']);

    const addNewForm = (event) => {
        event.preventDefault();
        setDestinationForms([...destinationForms, event])
    }

    useEffect(() => {
        setDestinationForms(['default'])
    }, [isTripRound])

    return (
        <>
            <Row>
                <Col>
                    <Header size={2} marginBottom={1}>
                        When
                    </Header>
                    {destinationForms.map((element, index) => {
                        return (
                            <Row marginBottom={2} key={index}>
                                <InputDate id={"dateFrom"} label={"Date from"} onChange={onInputChange} />
                                <InputDate id={"dateTo"} label={"Date to"} onChange={onInputChange} />
                            </Row>
                        )
                    })}
                </Col>
                <Col>
                    <Header size={2} marginBottom={1}>
                        Where
                    </Header>
                    {destinationForms.map((element, index) => {
                        return (
                            <Row marginBottom={2} key={index}>
                                <InputText 
                                    id={"wherePlace"} 
                                    placeholder={"City, place, etc..."} 
                                    onChange={onInputChange}
                                    noLabel
                                />
                                <InputText 
                                    id={"whereCoutry"} 
                                    placeholder={"Country"} 
                                    onChange={onInputChange} 
                                    noLabel
                                />
                            </Row>
                        )
                    })}
                </Col>
            </Row>
            {isTripRound && (
                <Button text={"+ Add more places"} onClick={addNewForm} isSmall/>
            )}
        </>
    )
}