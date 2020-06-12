import React from 'react';
import { InputDate } from "../_library/Inputs";
import { Col, Row } from "../_library/Containers";
import { Header } from "../_library/Headers";

export const AddTravelFormWhen = ({onInputChange}) => {
    return (
        <Col>
            <Header size={2} marginBottom={1}>
                When
            </Header>
            <Row marginBottom={2}>
                <InputDate id={"dateFrom"} label={"Date from"} onChange={onInputChange} />
                <InputDate id={"dateTo"} label={"Date to"} onChange={onInputChange} />
            </Row>
        </Col>
    )
}