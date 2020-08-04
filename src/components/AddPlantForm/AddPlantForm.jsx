import React, { useState, useEffect } from "react";
import { Button } from '../_library/Buttons';
import { Row, Col, Box } from '../_library/Containers';
import { AddPlantFormType } from "./AddPlantFormType";
import { AddPlantFormInfo } from "./AddPlantFormInfo";
import { initialFormState } from "./AddPlantForm.helpers";
import { withRouter } from 'react-router';
import { usePlants } from "../../hooks/usePlants";

const AddPlantForm = ({history}) => {
    const [formValues, setFormValues] = useState(initialFormState);
    const [isValidated, setIsValidated] = useState(false);
    const {userPlants, getUserPlants, postFormValues} = usePlants();

    const checkFormValidation = () => {
        return formValues.plantType.trim().length > 0
            && formValues.plantName.trim().length > 0
            && formValues.date.trim().length > 0
            && formValues.water.trim().length > 0
            && formValues.mist.trim().length > 0
            && formValues.fertilize.trim().length > 0
    }

    const handlePlantTypeChange = (event) => {
        setFormValues({...formValues, plantType: event.target.id});
        checkFormValidation();
    }

    const handleInputChange = (event) => {
        event.persist();
        setFormValues({...formValues, [event.target.id]: event.target.value});
        checkFormValidation();
    }

    const handleSubmit = () => {
        checkFormValidation() 
            ? postFormValues([...userPlants, formValues], history)
            : setIsValidated(true)
    }

    useEffect(() => {
        getUserPlants()
    }, [getUserPlants])

    return (
        <Row justify={'space-around'}>
            <Col>
                <Box>
                    <AddPlantFormType onPlantTypeChange={handlePlantTypeChange} plantType={formValues.plantType} isFormSubmitted={isValidated}/>
                    <AddPlantFormInfo onInputChange={handleInputChange} values={formValues} isFormSubmitted={isValidated}/>
                    <Button text={'DODAJ'} onClick={handleSubmit} justify={'center'} />
                </Box>
            </Col>
        </Row>
    );
};

export default withRouter(AddPlantForm)