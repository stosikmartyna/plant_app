import React from 'react';
import { InputText, Select } from "../_library/Inputs";
import { Row, Col } from "../_library/Containers";

export const BusSectionForm = () => {
    const selectOptions = [
        { value: 'pln', name: 'zł' },
        { value: 'eur', name: '€'},
        { value: 'gbp', name: '£'},
        { value: 'usd', name: '$'},
    ]

    return (
        <Row marginBottom={2}>
            <InputText id={"busOperator"} label={"Bus Operator"} />
            <Col>
                <Row marginBottom={2}>
                    <InputText id={"busTicketStationFrom"} label={"from"} placeholder={'Bus station'} marginBottom={1} />
                </Row>
                <Row>
                    <InputText id={"busTicketPriceFrom"} placeholder={'Price'} isSmall />
                    <Select options={selectOptions} variant={'small'} />
                </Row>
            </Col>
            <Col>       
                <Row marginBottom={2}>    
                    <InputText id={"busTicketStationTo"} label={"to"} placeholder={'Bus station'} marginBottom={1} />
                </Row> 
                <Row>
                    <InputText id={"busTicketPriceTo"} placeholder={'Price'} isSmall />
                    <Select options={selectOptions} variant={'small'} />
                </Row>
            </Col>
        </Row>
    )
}