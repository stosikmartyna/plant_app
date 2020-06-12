import React from "react";
import { InputText, Select } from "../_library/Inputs";
import { Row, Col } from "../_library/Containers";
import { Header } from "../_library/Headers";

export const AddTravelFormHow = ({onInputChange}) => {
    const currencyOptions = [
        { value: "pln", name: "zł" },
        { value: "eur", name: "€" },
        { value: "gbp", name: "£" },
        { value: "usd", name: "$" },
    ];

    const transportOptions = [
        { value: '', name: "Choose transport type"},
        { value: "bus", name: "Bus" },
        { value: "car", name: "Car" },
        { value: "plane", name: "Plane" },
        { value: "ship", name: "Ship" },
        { value: "train", name: "Train" },
        { value: "other", name: "Other" },
    ];

    return (
        <>
            <Header size={2} marginBottom={1}>
                How
            </Header>
            <Row marginBottom={2}>
                <Col>
                    <Select id={"transportType"} options={transportOptions} label={'Transport'} onChange={onInputChange}/>
                </Col>
                <Col>
                    <Row marginBottom={2}>
                        <InputText
                            id={"cityFrom"}
                            label={"from"}
                            placeholder={"City"}
                            marginBottom={1}
                            onChange={onInputChange}
                        />
                    </Row>
                    <Row>
                        <InputText id={"priceFrom"} placeholder={"Price"} onChange={onInputChange} isSmall />
                        <Select id={"priceFromCurrency"} options={currencyOptions} onChange={onInputChange} isSmall />
                    </Row>
                </Col>
                <Col>
                    <Row marginBottom={2}>
                        <InputText
                            id={"cityTo"}
                            label={"to"}
                            placeholder={"City"}
                            marginBottom={1}
                            onChange={onInputChange}
                        />
                    </Row>
                    <Row>
                        <InputText id={"priceTo"} placeholder={"Price"} onChange={onInputChange} isSmall />
                        <Select id={"priceToCurrency"} options={currencyOptions} onChange={onInputChange} isSmall />
                    </Row>
                </Col>
            </Row>
        </>
    );
};
