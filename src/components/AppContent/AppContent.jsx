import React from 'react';
import { ROUTES } from '../../helpers/routes';
import { Switch, Route } from 'react-router-dom';
import { HomeView } from '../../views/HomeView';
import { AddTravelView } from '../../views/AddTravelView';
import { MyTravelsView } from '../../views/MyTravelsView';
import { TravelPlansView } from '../../views/TravelPlansView';
import './AppContent.css';

export const AppContent = () => {
    return (
        <div className={'container'}>
            <Switch>
                <Route exact path={ROUTES.HOME} component={() => <HomeView />} />
                <Route path={ROUTES.ADD_TRAVEL} component={() => <AddTravelView />} />
                <Route path={ROUTES.MY_TRAVELS} component={() => <MyTravelsView />} />
                <Route path={ROUTES.TRAVEL_PLANS} component={() => <TravelPlansView />} />
            </Switch>
        </div>
    )
}