import React from 'react';
import { Header } from '../_library/Headers';
import { Row, Col } from '../_library/Containers';
import { Text } from '../_library/Text';
import { Button } from '../_library/Buttons';

export const MyPlantsUserInfo = ({plant, removePlant}) => {
    const {date, information} = plant;
    
    return (
        <Row justify={'space-between'}>
            <Col>
                <Header size={4} marginBottom={0.5}>Informacje dodatkowe</Header>
                <Text>Data nabycia: {date}</Text>
                {information && <Text>Dodatkowe informacje o roślinie: {information}</Text>}
            </Col>
            <Col justify={'flex-end'}>
                <Button text={'Usuń'} onClick={() => removePlant(plant)} small/>
            </Col>
        </Row>
    )
}