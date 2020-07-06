import React, { useState } from 'react';
import firebase from 'firebase';
import { Row } from '../_library/Containers';
import { PlantAtlasBox } from './PlantAtlasBox';
import { useEffect } from 'react';

export const PlantsAtlas = () => {
    const [plants, setPlants] = useState();

    useEffect(() => {
        firebase.database().ref(`plants`)
            .once('value')
            .then(snapshot => {
                const response = snapshot.val() || [];
                setPlants(response);
            })
            .catch(err => console.warn(err.message));
    }, [])

    return (
        <Row justify={'space-evenly'} wrap>
            {plants?.map((plant, index) => <PlantAtlasBox key={index} plant={plant} />)}
        </Row>
    )
}