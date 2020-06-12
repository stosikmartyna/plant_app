import React from "react";
import { InputText, Select } from "../_library/Inputs";
import { Row, Col } from "../_library/Containers";
import { Header } from "../_library/Headers";

export const AddTravelFormHow = () => {
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
                    <Select id={"type"} options={transportOptions} label={'Transport'}/>
                </Col>
                <Col>
                    <Row marginBottom={2}>
                        <InputText
                            id={"from"}
                            label={"from"}
                            placeholder={"City"}
                            marginBottom={1}
                        />
                    </Row>
                    <Row>
                        <InputText id={"priceFrom"} placeholder={"Price"} isSmall />
                        <Select options={currencyOptions} isSmall />
                    </Row>
                </Col>
                <Col>
                    <Row marginBottom={2}>
                        <InputText
                            id={"to"}
                            label={"to"}
                            placeholder={"City"}
                            marginBottom={1}
                        />
                    </Row>
                    <Row>
                        <InputText id={"priceTo"} placeholder={"Price"} isSmall />
                        <Select options={currencyOptions} isSmall />
                    </Row>
                </Col>
            </Row>
        </>
    );
};
