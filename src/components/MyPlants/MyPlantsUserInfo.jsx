import React from 'react';
import { Header } from '../_library/Headers';
import { Row, Col } from '../_library/Containers';
import { Text } from '../_library/Text';

export const MyPlantsUserInfo = ({plant}) => {
    const {date, informations} = plant;
    
    return (
        <Row>
            <Col>
                <Header size={4} marginBottom={0.5}>Informacje dodatkowe</Header>
                <Text>Data nabycia: {date}</Text>
                <Text>Dodatkowe informacje o roślinie: {informations}</Text>
            </Col>
        </Row>
    )
}