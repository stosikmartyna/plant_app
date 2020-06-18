import React from 'react';
import { Header } from '../_library/Headers';
import { Row, Col } from '../_library/Containers';
import { Text } from '../_library/Text';
import { colors } from '../../helpers/colors';
import { PlantIcon } from './MyPlants.helpers';

export const MyPlants = () => {
    return (
        <Row>
            <Col marginRight={1.5} justify={'space-evenly'} align={'center'} borderRight={colors.moroccanSands}>
                <PlantIcon icon={'icon_plant_1.png'} />
            </Col>
            <Col>
                <Row marginBottom={1}>
                    <Col>
                        <Header size={2} marginBottom={0.5}>Nazwa rośliny</Header>
                        <Text>
                            Opis rośliny z naszego api. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero magni qui veritatis sit sint nisi ab at aliquam. Numquam officiis molestiae saepe, a possimus ut odio quae exercitationem error soluta id accusantium ad quidem illo. Eveniet, eaque nam repudiandae nobis debitis accusamus deleniti corporis esse doloremque accusantium fugit in reiciendis?
                        </Text>
                    </Col>
                </Row>

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

                <Row>
                    <Col>
                        <Header size={4} marginBottom={0.5}>Informacje dodatkowe</Header>
                        <Text>Data nabycia: 01.01.2001</Text>
                        <Text>Dodatkowe informacje o roślinie podane przez użytkownika podczas wypełniania formularza.</Text>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}