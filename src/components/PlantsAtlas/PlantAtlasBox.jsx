import React, { useState } from "react";
import { Col, Box } from '../_library/Containers';
import { Break } from '../_library/Break';
import { Button } from '../_library/Buttons';
import { Text } from '../_library/Text';
import { Header } from '../_library/Headers';
import { Img } from '../_library/Img';

export const PlantAtlasBox = ({plant}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const cutText = (text) => text.substring(0, 130) + '...';

    return (
        <Col>
            <Box width={18}>
                <Img
                    src={plant.img}
                    alt={plant.name}
                    marginBottom={1}
                />
                <Header size={3} marginBottom={1}>
                    {plant.name}
                </Header>
                <Text marginBottom={1}>
                    {isExpanded ? plant.description : cutText(plant.description)}
                </Text>
                <Button 
                    onClick={() => setIsExpanded(!isExpanded)} 
                    text={isExpanded ? "Zwiń" : "Czytaj dalej"}
                    justify={'center'}
                />
            </Box>
            <Break lines={1.5} />
        </Col>
    );
};
