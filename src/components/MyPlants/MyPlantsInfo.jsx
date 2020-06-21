import React from 'react';
import { Header } from '../_library/Headers';
import { Row, Col } from '../_library/Containers';
import { Text } from '../_library/Text';

export const MyPlantsInfo = ({plantName}) => {
    return (
        <Row marginBottom={1}>
            <Col>
                <Header size={2} marginBottom={0.5}>{plantName}</Header>
                <Text>
                    Opis rośliny z naszego api. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero magni qui veritatis sit sint nisi ab at aliquam. Numquam officiis molestiae saepe, a possimus ut odio quae exercitationem error soluta id accusantium ad quidem illo. Eveniet, eaque nam repudiandae nobis debitis accusamus deleniti corporis esse doloremque accusantium fugit in reiciendis?
                </Text>
            </Col>
        </Row>
    )
}