import React, { useState, useContext } from "react";
import firebase from 'firebase';
import { ROUTES } from '../../helpers/routes'; 
import { AuthContext } from '../../components/Auth/Auth';
import { Button } from '../_library/Buttons';
import { AddPlantFormType } from "./AddPlantFormType";
import { AddPlantFormInfo } from "./AddPlantFormInfo";
import { initialFormState } from "./AddPlantForm.helpers";
import { withRouter } from 'react-router';

const AddPlantForm = ({history}) => {
    const [formValues, setFormValues] = useState(initialFormState);
    const {user, userPlants} = useContext(AuthContext);

    const handlePlantTypeChange = (event) => {
        setFormValues({...formValues, plantType: event.target.id})
    }

    const handleInputChange = (event) => {
        event.persist();
        setFormValues({...formValues, [event.target.id]: event.target.value});
    }

    const handleSubmit = () => {
        firebase.database().ref(`users/${user.uid}/plants`).set([...userPlants, formValues])
            .then(() => {
                alert('Dodano pomyślnie')
                history.push(ROUTES.MY_GARDEN)
            })
            .catch((err) => alert(err))
    }

    return (
        <>
            <AddPlantFormType onPlantTypeChange={handlePlantTypeChange} />
            <AddPlantFormInfo onInputChange={handleInputChange} />
            <Button text={'DODAJ'} onClick={handleSubmit}/>
        </>
    );
};

export default withRouter(AddPlantForm)