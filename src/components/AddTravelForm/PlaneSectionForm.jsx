import React from "react";
import { InputText, InputCheckbox } from "../_library/Inputs";
import { Button } from "../_library/Buttons";
import { Row } from "../_library/Containers";

export const PlaneSectionForm = () => {
  return (
    <>
      <Row>
        <InputText id={"flightNumber"} label={"Flight Number"} />
        <InputText id={"airline"} label={"Airline"} />
      </Row>

      <Row>
        <InputText id={"airportFrom"} label={"Airport from"} />
        <InputText id={"airportTo"} label={"Airport to"} />
      </Row>

      <Row>
        <InputText id={"flightTicketPriceFrom"} label={"Price"} />
        <InputCheckbox id={"flightTicketNoPrice"} label={"Connecting Flight"} />
      </Row>
      <Button text={"Add return flight"} />
    </>
  );
};
