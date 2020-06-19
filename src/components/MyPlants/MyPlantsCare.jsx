import React from 'react';
import { Header } from '../_library/Headers';
import { Row, Col } from '../_library/Containers';
import { Text } from '../_library/Text';

export const MyPlantsCare = () => {
    return (
        <>
            <Row>
                <Header size={4} marginBottom={0.5}>Pielęgnacja</Header>
            </Row>

            <Row marginBottom={1}>
                <Col marginRight={1}>
                    <Text>Podlewanie</Text>
                    <Text>Zraszanie</Text>
                    <Text>Nawożenie</Text>
                </Col> 
                <Col marginRight={1}>
                    <Text>co 5 dni</Text>
                    <Text>co 5 dni</Text>
                    <Text>co 5 dni</Text>
                </Col> 
                <Col>
                    <Text>ostatnio 12.06.2020</Text>
                    <Text>ostatnio 12.06.2020</Text>
                    <Text>ostatnio 12.06.2020</Text>
                </Col> 
            </Row>
        </>
    )
}