import React from 'react';
import { usePlants } from "../../hooks/usePlants";
import { Row } from '../_library/Containers';
import { PlantAtlasBox } from './PlantAtlasBox';
import { useEffect } from 'react';

export const PlantsAtlas = () => {
    const {allPlants, getAllPlants} = usePlants();

    useEffect(() => {
        getAllPlants();
    }, [getAllPlants])

    return (
        <Row justify={'space-evenly'} wrap>
            {allPlants?.map((plant, index) => <PlantAtlasBox key={index} plant={plant} />)}
        </Row>
    )
}