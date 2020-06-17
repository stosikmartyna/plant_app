import React, { useState } from "react";
import { Button } from '../_library/Buttons';
import { AddPlantFormType } from "./AddPlantFormType";
import { AddPlantFormInfo } from "./AddPlantFormInfo";
import { initialFormState } from "./AddPlantForm.helpers";

export const AddPlantForm = () => {
    const [formValues, setFormValues] = useState(initialFormState);

    const handlePlantTypeChange = (event) => {
        setFormValues({...formValues, plantType: event.target.id})
    }

    const handleInputChange = (event) => {
        event.persist();
        setFormValues({...formValues, [event.target.id]: event.target.value});
    }

    return (
        <>
            <AddPlantFormType onPlantTypeChange={handlePlantTypeChange} />
            <AddPlantFormInfo onInputChange={handleInputChange} />
            <Button text={'DODAJ'} onClick={() => console.log(formValues)}/>
        </>
    );
};