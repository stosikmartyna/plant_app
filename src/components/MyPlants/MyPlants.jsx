import React from 'react';
import { Row, Col } from '../_library/Containers';
import { colors } from '../../helpers/colors';
import { PlantIcon } from './MyPlants.helpers';
import { MyPlantsInfo } from './MyPlantsInfo';
import { MyPlantsCare } from './MyPlantsCare';
import { MyPlantsUserInfo } from './MyPlantsUserInfo';

export const MyPlants = () => {
    return (
        <Row>
            <Col marginRight={1.5} justify={'space-evenly'} align={'center'} borderRight={colors.moroccanSands}>
                <PlantIcon icon={'icon_plant_1.png'} />
            </Col>
            <Col>
                <MyPlantsInfo />
                <MyPlantsCare />
                <MyPlantsUserInfo />
            </Col>
        </Row>
    )
}