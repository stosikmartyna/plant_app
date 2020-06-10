import React, { useState } from "react";
import {
    InputText,
    InputDate,
    InputRadio,
    InputCheckbox,
} from "../_library/Inputs";
import { Button } from "../_library/Buttons";
import { Col, Row } from "../_library/Containers";
import { Header } from "../_library/Headers";
import { PlaneSectionForm } from "./PlaneSectionForm";
import { CarSectionForm } from "./CarSectionForm";
import { BusSectionForm } from "./BusSectionForm";
import { ShipSectionForm } from "./ShipSectionForm";
import { TrainSectionForm } from "./TrainSectionForm";

export const AddTravelForm = () => {
    const [tripType, setTripType] = useState('single');

    const handleTripType = (event) => {
        setTripType(event.target.value)
    }

    return (
        <form>
            <Header size={2} marginBottom={1}>
                Trip
            </Header>
            <Row marginBottom={2}>
                <InputRadio id={"singleTrip"} name={"trip"} label={"Single"} onChange={handleTripType} value={'single'} />
                <InputRadio id={"roundTrip"} name={"trip"} label={"Round"} onChange={handleTripType} value={'round'} />
            </Row>

            <Row>
                <Col>
                    <Header size={2} marginBottom={1}>
                        When
                    </Header>
                    <Row marginBottom={2}>
                        <InputDate id={"dateFrom"} label={"Date from"} />
                        <InputDate id={"dateTo"} label={"Date to"} />
                    </Row>
                </Col>

                <Col>
                    <Header size={2}  marginBottom={2.2}>
                        Where
                    </Header>
                    <Row>
                        <InputText id={"wherePlace"} placeholder={"City, place, etc..."} />
                        <InputText id={"whereCoutry"} placeholder={"Country"} />
                    </Row>
                </Col>

                <Col>
                    <Header size={2} marginBottom={1}>
                        How
                    </Header>
                    <Row>
                        <Col>
                            <InputCheckbox id={"transportPlane"} label={"Plane"} />
                            <InputCheckbox id={"transportCar"} label={"Car"} />
                            <InputCheckbox id={"transportBus"} label={"Bus"} />
                        </Col>
                        <Col>
                            <InputCheckbox id={"transportTrain"} label={"Train"} />
                            <InputCheckbox id={"transportShip"} label={"Ship"} />
                            <InputCheckbox id={"transportOther"} label={"Other"} />
                        </Col>
                    </Row>
                </Col>

            </Row>

            <Button text={"Add more places"} />

            <h4>How - Section details</h4>
            <PlaneSectionForm />
            <br />
            <br />
            <CarSectionForm />
            <br />
            <br />
            <BusSectionForm />
            <br />
            <br />
            <TrainSectionForm />
            <br />
            <br />
            <ShipSectionForm />

        </form>
    );
};
