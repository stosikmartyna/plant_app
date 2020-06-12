import React from 'react';
import { InputText } from "../_library/Inputs";
import { Col, Row } from "../_library/Containers";
import { Header } from "../_library/Headers";

export const AddTravelFormWhere = ({onInputChange}) => {
    return (
        <Col>
            <Header size={2}  marginBottom={2.2}>
                Where
            </Header>
            <Row>
                <InputText 
                    id={"wherePlace"} 
                    placeholder={"City, place, etc..."} 
                    onChange={onInputChange} 
                />
                <InputText 
                    id={"whereCoutry"} 
                    placeholder={"Country"} 
                    onChange={onInputChange} 
                />
            </Row>
        </Col>
    )
}