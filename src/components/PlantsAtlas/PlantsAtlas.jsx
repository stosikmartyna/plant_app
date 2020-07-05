import React, { useState } from 'react';
import { Row, Col, Box } from '../_library/Containers';
import { Break } from '../_library/Break';
import { Button } from '../_library/Buttons';

export const PlantsAtlas = () => {
    const arrMock = [1,2,3]
    
    return (
        <Row justify={'space-evenly'} wrap>
            {arrMock.map(div => {
                return (
                    <Col>
                        <Box maxWidth={22}>
                            <img src="plantsAtlasImg/maranta_fascinator_tricolor.jpg" alt="maranta_fascinator_tricolor" width='100%' />
                            <h2>Maranta Fascinator Tricolor</h2>
                            <p> 
                                Odmiana Fascinator Tricolor jest jedną z ciekawszych odmian barwnych maranty. Ta roślina doniczkowa tworzy gęsto ulistnione kępy sięgające 30 cm wysokości. Jej piękne, jajowate liście mają aksamitną fakturę i przykuwającą wzrok kolorystykę. Układają się regularnie w zwartą kępę z krótkimi pędami. Spód liści jest purpurowy, zewnętrzna strona natomiast wielobarwna. Ciemna zieleń powierzchni liści przeplata się z jasną, a wzdłuż głównych nerwów biegną jaskrawo pomarańczowe, kontrastujące wzory o łukowym rysunku. Środek każdego liścia zdobiony jest dodatkowo jasnymi akcentami. Wśród liści pojawiają się drobne, białe kwiaty praktycznie przez cały rok, jednak główną ozdobę stanowią barwne liście.

                            </p>
                            <Button text={'>>'} />
                        </Box>
                        <Break lines={1.5}/>
                    </Col>
                )
            })}
        </Row>
    )
}