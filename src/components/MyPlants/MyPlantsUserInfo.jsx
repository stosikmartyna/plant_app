import React from 'react';
import { Header } from '../_library/Headers';
import { Row, Col } from '../_library/Containers';
import { Text } from '../_library/Text';

export const MyPlantsUserInfo = () => {
    return (
        <Row>
            <Col>
                <Header size={4} marginBottom={0.5}>Informacje dodatkowe</Header>
                <Text>Data nabycia: 01.01.2001</Text>
                <Text>Dodatkowe informacje o roślinie podane przez użytkownika podczas wypełniania formularza.</Text>
            </Col>
        </Row>
    )
}