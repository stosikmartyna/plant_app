import React, { useState } from "react";
import { AddTravelFormHow } from "./AddTravelFormHow";
import { AddTravelFormTrip } from "./AddTravelFormTrip";
import { AddTravelFormWhere } from "./AddTravelFormWhere";

export const AddTravelForm = () => {
    const [inputsValues, setInputsValues] = useState({
        tripType: 'single',
        dateFrom: '',
        dateTo: '',
        wherePlace: '',
        whereCoutry: '',
        transportType: '',
        cityFrom: '',
        cityTo: '', 
        priceFrom: '',
        priceFromCurrency: '',
        priceTo: '',
        priceToCurrency: '',
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
            <AddTravelFormWhere onInputChange={handleInputChange} isTripRound={isTripRound}/>    
            <AddTravelFormHow onInputChange={handleInputChange}/>
        </form>
    );
};