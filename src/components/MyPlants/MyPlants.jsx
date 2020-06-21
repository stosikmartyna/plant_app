import React from 'react';
import { Row, Col } from '../_library/Containers';
import { colors } from '../../helpers/colors';
import { PlantIcon } from './MyPlants.helpers';
import { MyPlantsInfo } from './MyPlantsInfo';
import { MyPlantsCare } from './MyPlantsCare';
import { MyPlantsUserInfo } from './MyPlantsUserInfo';
import { useContext } from 'react';
import { AuthContext } from '../Auth/Auth';

export const MyPlants = () => {
    const {userPlants} = useContext(AuthContext);

    return userPlants && userPlants.map((plant, index) => {
        return (
            <Row key={index} marginBottom={2}>
                <Col marginRight={1.5} justify={'space-evenly'} align={'center'} borderRight={colors.moroccanSands}>
                    <PlantIcon icon={`${plant.plantType}.png`} />
                </Col>
                <Col>
                    <MyPlantsInfo plantName={plant.plantName}/>
                    <MyPlantsCare plant={plant}/>
                    <MyPlantsUserInfo plant={plant}/>
                </Col>
            </Row>
        )
    })
   
}