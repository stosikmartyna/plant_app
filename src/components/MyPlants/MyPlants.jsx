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
    const [allPlants, setAllPlants] = useState();

    useEffect(() => {
        user && firebase.database().ref(`users/${user.uid}/plants`)
            .once('value')
            .then(snapshot => {
                const response = snapshot.val() || [];
                setUserPlants(response);
            })
            .catch(err => console.warn(err.message));

        firebase.database().ref(`plants`)
            .once('value')
            .then(snapshot => {
                const response = snapshot.val() || [];
                setAllPlants(response);
            })
            .catch(err => console.warn(err.message));
    }, [user])

    return userPlants.map((plant, index) => {
        const plantDataInfo = allPlants?.find(plantData =>  plantData.name === plant.plantName)
        
        return (
            <Box marginBottom={1} key={index}>
                <Row>
                    <Col marginRight={1.5} justify={'space-evenly'} align={'center'} borderRight={colors.moroccanSands}>
                        <PlantIcon icon={`${plant.plantType}.png`} />
                    </Col>
                    <Col>
                        <MyPlantsInfo plantName={plant.plantName} description={plantDataInfo?.description}/>
                        <MyPlantsCare plant={plant}/>
                        <MyPlantsUserInfo plant={plant}/>
                    </Col>
                </Row>
            </Box>
        )
    })
}