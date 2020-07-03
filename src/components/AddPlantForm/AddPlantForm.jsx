import React, { useState, useEffect, useContext } from "react";
import firebase from 'firebase';
import { ROUTES } from '../../helpers/routes'; 
import { AuthContext } from '../../components/Auth/Auth';
import { Button } from '../_library/Buttons';
import { Row, Col, Box } from '../_library/Containers';
import { AddPlantFormType } from "./AddPlantFormType";
import { AddPlantFormInfo } from "./AddPlantFormInfo";
import { initialFormState } from "./AddPlantForm.helpers";
import { withRouter } from 'react-router';

const AddPlantForm = ({history}) => {
    const [formValues, setFormValues] = useState(initialFormState);
    const [isValidated, setIsValidated] = useState(false);
    const [userPlants, setUserPlants] = useState();
    const {user} = useContext(AuthContext);

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
        const postUrl = `users/${user.uid}/plants`
        const postFormValues = firebase.database().ref(postUrl).set([...userPlants, formValues])

        checkFormValidation() 
            ? postFormValues
                .then(() => {
                    alert('Dodano pomyślnie')
                    history.push(ROUTES.MY_GARDEN)
                })
                .catch((err) => alert(err))
            : setIsValidated(true)
    }

    useEffect(() => {
        user && firebase.database().ref(`users/${user.uid}/plants`)
        .once('value')
        .then(snapshot => {
            const userPlants = snapshot.val() || [];
            setUserPlants(userPlants);
        })
        .catch(err => console.warn(err.message));
    }, [user])

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