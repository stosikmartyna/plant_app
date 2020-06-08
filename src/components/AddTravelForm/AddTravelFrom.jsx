import React from 'react';
import { InputText, InputDate, InputRadio, InputCheckbox } from '../_library/Inputs';
import { Button } from '../_library/Buttons';
import { FlexContainer } from '../_library/Containers';

export const AddTravelForm = () => {
    return (
        <form>
            
            <br/><br/>

            <h2>Trip</h2>
            <FlexContainer>
                <InputRadio id={'singleTrip'} name={'trip'} label={'Single'} />
                <InputRadio id={'roundTrip'} name={'trip'} label={'Round'} />
            </FlexContainer>

            <br/><br/>

            <h2>When</h2>
            <FlexContainer>
                <InputDate id={'dateFrom'} label={'Date from'} />
                <InputDate id={'dateTo'} label={'Date to'} />
            </FlexContainer>

            <br/><br/>
            
            <h2>Where</h2>
            <FlexContainer>
                <InputText id={'wherePlace'} placeholder={'City, place, etc...'} />
                in
                <InputText id={'whereCoutry'} placeholder={'Country'} />
            </FlexContainer>
            <Button text={'Add more places'}/>

            <br/><br/>

            <h2>How</h2>
            <FlexContainer>
                <InputCheckbox id={'transportPlane'} label={'Plane'} />
                <InputCheckbox id={'transportCar'} label={'Car'} />
                <InputCheckbox id={'transportBus'}  label={'Bus'} />
                <InputCheckbox id={'transportTrain'} label={'Train'} />
                <InputCheckbox id={'transportShip'} label={'Ship'} />
            </FlexContainer>
            <Button text={'Add more'}/>

            <br/>

            <h4>How - Section details</h4>
            <FlexContainer>
                <InputText id={'flightNumber'} label={'Flight Number'} />
                <InputText id={'airline'} label={'Airline'} />
            </FlexContainer>
            
            <FlexContainer>
                <InputText id={'airportFrom'} label={'Airport from'} />
                <InputText id={'airportTo'} label={'Airport to'} />
            </FlexContainer>

            <FlexContainer>
                <InputText id={'flightTicketPriceFrom'} label={'Price'} />
                <InputCheckbox id={'flightTicketNoPrice'} label={'Connecting Flight'} />
            </FlexContainer>
            <Button text={'Add return flight'}/>

            <br/>

            <FlexContainer>
                <InputText id={'car'} label={'Car'} placeholder={'Model, rental, etc...'} />
                <InputText id={'carCosts'} label={'Car Costs'} />
            </FlexContainer>

            <br/>

            <FlexContainer>
                <InputText id={'busOperator'} label={'Bus Operator'} />
                <InputText id={'busTicketPriceFrom'} label={'[ikonka]'} />
                <InputText id={'busTicketPriceTo'} label={'[ikonka]'} />
            </FlexContainer>

            <br/>

            <FlexContainer>
                <InputText id={'train'} label={'Railways'} />
                <InputText id={'trainTicketPriceFrom'} label={'[ikonka]'} />
                <InputText id={'trainTicketPriceTo'} label={'[ikonka]'} />
            </FlexContainer>

            <br/>
            
            <FlexContainer>
                <InputText id={'ship'} label={'Operator'} placeholder={'Cruise, ferry, etc...'}/>
                <InputText id={'shipTicketPriceFrom'} label={'[ikonka]'} />
                <InputText id={'shipTicketPriceTo'} label={'[ikonka]'} />
            </FlexContainer>

            
        </form>
    )
}