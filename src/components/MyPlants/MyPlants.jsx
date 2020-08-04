import React, { useEffect } from 'react';
import { Row, Col, Box } from '../_library/Containers';
import { colors } from '../../helpers/colors';
import { PlantIcon } from './MyPlants.helpers';
import { MyPlantsInfo } from './MyPlantsInfo';
import { MyPlantsCare } from './MyPlantsCare';
import { MyPlantsUserInfo } from './MyPlantsUserInfo';
import { usePlants } from "../../hooks/usePlants";

export const MyPlants = () => {
    const {userPlants, allPlants, getUserPlants, getAllPlants, removeUserPlant} = usePlants();

    useEffect(() => {
        getUserPlants();
        getAllPlants();
    }, [getUserPlants, getAllPlants])

    return userPlants.map((userPlant, index) => {
        const plantDataInfo = allPlants?.find(plantData => {
            return plantData.name === userPlant.plantName || plantData.altName.find(altName => altName === userPlant.plantName)
        })

        return (
            <Box marginBottom={1} key={index}>
                <Row>
                    <Col marginRight={1.5} justify={'space-evenly'} align={'center'} borderRight={colors.canadianSky}>
                        <PlantIcon icon={`${userPlant.plantType}.png`} />
                    </Col>
                    <Col maxSize>
                        <MyPlantsInfo plantName={userPlant.plantName} description={plantDataInfo?.description}/>
                        <MyPlantsCare plant={userPlant}/>
                        <MyPlantsUserInfo plant={userPlant} removePlant={removeUserPlant}/>
                    </Col>
                </Row>
            </Box>
        )
    })
}