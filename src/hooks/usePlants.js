import { useState, useCallback, useContext } from 'react';
import { AuthContext } from '../components/Auth/Auth';
import { ROUTES } from '../helpers/routes'; 
import firebase from 'firebase';

export const usePlants = () => {
    const [userPlants, setUserPlants] = useState([]);
    const [allPlants, setAllPlants] = useState([]);
    const {user} = useContext(AuthContext);

    const getUserPlants = useCallback(() => {
        user && firebase.database().ref(`users/${user.uid}/plants`)
            .once('value')
            .then(snapshot => {
                const userPlants = snapshot.val() || [];
                setUserPlants(userPlants);
            })
            .catch(err => console.warn(err.message));
    }, [user]);

    const getAllPlants = useCallback(() => {
        firebase.database().ref(`plants`)
            .once('value')
            .then(snapshot => {
                const response = snapshot.val() || [];
                setAllPlants(response);
            })
            .catch(err => console.warn(err.message));
    }, []);

    const postFormValues = useCallback((values, history) => {
        const postUrl = `users/${user.uid}/plants`
        firebase.database().ref(postUrl).set(values)
            .then(() => {
                alert('Dodano pomyślnie')
                history.push(ROUTES.MY_GARDEN)
            })
            .catch((err) => alert(err))
    }, [user.uid]);

    const removeUserPlant = useCallback(plantToRemove => {
        const postUrl = `users/${user.uid}/plants`
        const filteredUserPlants = userPlants.filter(plant => plant !== plantToRemove);

        firebase.database().ref(postUrl).set(filteredUserPlants)
            .then(() => {
                alert('Usunięto pomyślnie');
                getUserPlants();
            })
            .catch((err) => alert(err))
    }, [user.uid, postFormValues, userPlants]);

    return {
        userPlants,
        allPlants,
        getUserPlants,
        removeUserPlant,
        getAllPlants,
        postFormValues,
    }
}
