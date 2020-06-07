import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {ROUTES} from '../../helpers/routes';
import {HomeView} from '../../views/HomeView';
import {AddTravelView} from '../../views/AddTravelView';
import {MyTravelsView} from '../../views/MyTravelsView';
import {TravelPlansView} from '../../views/TravelPlansView';
import {AddTravelIcon, MyTravelsIcon, TravelPlansIcon} from './NavbarIcons';
import {NavbarLink} from './NavbarLink';

import './Navbar.css';

export const Navbar = () => {
    return (
        <>
            <div className={"navbar"}>
                <NavbarLink 
                    path={ROUTES.HOME}
                    icon={<AddTravelIcon />}
                    title={'Home'}
                />
                <NavbarLink
                    path={ROUTES.ADD_TRAVEL}
                    icon={<AddTravelIcon />}
                    title={'Add Travel'}
                />
                <NavbarLink
                    path={ROUTES.MY_TRAVELS}
                    icon={<MyTravelsIcon />}
                    title={'My Travels'}
                />
                <NavbarLink
                    path={ROUTES.TRAVEL_PLANS}
                    icon={<TravelPlansIcon />}
                    title={'Travel Plans'}
                />
            </div>
            <Switch>
                <Route exact path={ROUTES.HOME} component={() => <HomeView />} />
                <Route path={ROUTES.ADD_TRAVEL} component={() => <AddTravelView />} />
                <Route path={ROUTES.MY_TRAVELS} component={() => <MyTravelsView />} />
                <Route path={ROUTES.TRAVEL_PLANS} component={() => <TravelPlansView />} />
            </Switch>
        </>
    )
}