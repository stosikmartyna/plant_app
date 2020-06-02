import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import {ROUTES} from '../../helpers/routes';
import {HomeView} from '../../views/HomeView';
import {AddTravelView} from '../../views/AddTravelView';
import {MyTravelsView} from '../../views/MyTravelsView';
import {TravelPlansView} from '../../views/TravelPlansView';

export const Navbar = () => {
    return (
        <>
            <Link to={ROUTES.HOME}>HOME</Link>
            <Link to={ROUTES.ADD_TRAVEL}>Add Travel</Link>
            <Link to={ROUTES.MY_TRAVELS}>My Travels</Link>
            <Link to={ROUTES.TRAVEL_PLANS}>Travel Plans</Link>
            <Switch>
                <Route exact path={ROUTES.HOME} component={() => <HomeView />} />
                <Route path={ROUTES.ADD_TRAVEL} component={() => <AddTravelView />} />
                <Route path={ROUTES.MY_TRAVELS} component={() => <MyTravelsView />} />
                <Route path={ROUTES.TRAVEL_PLANS} component={() => <TravelPlansView />} />
            </Switch>
        </>
    )
}