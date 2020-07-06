import React from 'react';
import { Header } from '../_library/Headers';
import { Row, Col } from '../_library/Containers';
import { Text } from '../_library/Text';

export const MyPlantsInfo = ({plantName, description}) => {
    return (
        <Row marginBottom={1}>
            <Col>
                <Header size={2} marginBottom={0.5}>{plantName}</Header>
                <Text>
                    {description}
                </Text>
            </Col>
        </Row>
    )
}