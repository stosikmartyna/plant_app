import React from 'react';
import { InputText } from "../_library/Inputs";
import { Row } from "../_library/Containers";

export const ShipSectionForm = () => {
    return (
        <Row>
            <InputText
                id={"ship"}
                label={"Operator"}
                placeholder={"Cruise, ferry, etc..."}
            />
            <InputText id={"shipTicketPriceFrom"} label={"[ikonka]"} />
            <InputText id={"shipTicketPriceTo"} label={"[ikonka]"} />
        </Row>
    )
}