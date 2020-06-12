import React, { useState } from "react";
import { Button } from "../_library/Buttons";
import { Row } from "../_library/Containers";
import { AddTravelFormHow } from "./AddTravelFormHow";
import { AddTravelFormTrip } from "./AddTravelFormTrip";
import { AddTravelFormWhen } from "./AddTravelFormWhen";
import { AddTravelFormWhere } from "./AddTravelFormWhere";

export const AddTravelForm = () => {
    const [inputsValues, setInputsValues] = useState({
        tripType: 'single',
        dateFrom: '',
        dateTo: '',
        wherePlace: '',
        whereCoutry: '',
    });

    const handleTripTypeChange = (event) => {
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
            <AddTravelFormTrip onTripTypeChange={handleTripTypeChange} isSingle={isTripSingle} isRound={isTripRound}/>
            <Row>
                <AddTravelFormWhen onInputChange={handleInputChange}/>
                <AddTravelFormWhere />
            </Row>

            {isTripRound && (
                <Button text={"Add more places"} />
            )}
            
            <AddTravelFormHow />
        </form>
    );
};