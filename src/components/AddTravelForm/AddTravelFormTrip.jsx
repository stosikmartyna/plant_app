import React from 'react';
import { InputRadio } from "../_library/Inputs";
import { Row } from "../_library/Containers";
import { Header } from "../_library/Headers";

export const AddTravelFormTrip = ({onTripTypeChange, isSingle, isRound}) => {    
    return (
        <>
            <Header size={2} marginBottom={1}>
                Trip
            </Header>
            <Row marginBottom={2}>
                <InputRadio
                    id={"singleTrip"}
                    name={"trip"}
                    label={"Single"}
                    onChange={onTripTypeChange}
                    value={'single'}
                    checked={isSingle}
                />
                <InputRadio
                    id={"roundTrip"}
                    name={"trip"}
                    label={"Round"}
                    onChange={onTripTypeChange}
                    value={'round'}
                    checked={isRound}
                />
            </Row>
        </>
    )
}