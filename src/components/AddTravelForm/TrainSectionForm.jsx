import React from 'react';
import { InputText } from "../_library/Inputs";
import { Row } from "../_library/Containers";

export const TrainSectionForm = () => {
    return (
        <Row>
            <InputText id={"train"} label={"Railways"} />
            <InputText id={"trainTicketPriceFrom"} label={"[ikonka]"} />
            <InputText id={"trainTicketPriceTo"} label={"[ikonka]"} />
        </Row>
    )
}