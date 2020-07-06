import React from 'react';
import { Row } from '../_library/Containers';
import { PlantAtlasBox } from './PlantAtlasBox';

export const PlantsAtlas = () => {
    const arrMock = [1,2,3,4,5,6];  

    const plantMock = {
        name: "Maranta Fascinator Tricolor",
        image: "plantsAtlasImg/maranta_fascinator_tricolor.jpg",
        imageAlt: "maranta fascinator tricolor",
        description: "Odmiana Fascinator Tricolor jest jedną z ciekawszych odmian barwnych maranty. Ta roślina doniczkowa tworzy gęsto ulistnione kępy sięgające 30 cm wysokości. Jej piękne, jajowate liście mają aksamitną fakturę i przykuwającą wzrok kolorystykę. Układają się regularnie w zwartą kępę z krótkimi pędami. Spód liści jest purpurowy, zewnętrzna strona natomiast wielobarwna. Ciemna zieleń powierzchni liści przeplata się z jasną, a wzdłuż głównych nerwów biegną jaskrawo pomarańczowe, kontrastujące wzory o łukowym rysunku. Środek każdego liścia zdobiony jest dodatkowo jasnymi akcentami. Wśród liści pojawiają się drobne, białe kwiaty praktycznie przez cały rok, jednak główną ozdobę stanowią barwne liście."
    }

    return (
        <Row justify={'space-evenly'} wrap>
            {arrMock.map(div => {
                return <PlantAtlasBox plant={plantMock} />
            })}
        </Row>
    )
}