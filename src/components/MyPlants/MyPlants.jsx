import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { Row, Col, Box } from '../_library/Containers';
import { colors } from '../../helpers/colors';
import { PlantIcon } from './MyPlants.helpers';
import { MyPlantsInfo } from './MyPlantsInfo';
import { MyPlantsCare } from './MyPlantsCare';
import { MyPlantsUserInfo } from './MyPlantsUserInfo';
import { useContext } from 'react';
import { AuthContext } from '../Auth/Auth';

export const MyPlants = () => {
    const {user} = useContext(AuthContext);
    const [userPlants, setUserPlants] = useState([]);

    useEffect(() => {
        user && firebase.database().ref(`users/${user.uid}/plants`)
        .once('value')
        .then(snapshot => {
            const userPlants = snapshot.val() || [];
            setUserPlants(userPlants);
        })
        .catch(err => console.warn(err.message));
    }, [user])

    return userPlants.map((plant, index) => {
        return (
            <Box marginBottom={1}>
                <Row key={index}>
                    <Col marginRight={1.5} justify={'space-evenly'} align={'center'} borderRight={colors.moroccanSands}>
                        <PlantIcon icon={`${plant.plantType}.png`} />
                    </Col>
                    <Col>
                        <MyPlantsInfo plantName={plant.plantName}/>
                        <MyPlantsCare plant={plant}/>
                        <MyPlantsUserInfo plant={plant}/>
                    </Col>
                </Row>
            </Box>
        )
    })
}