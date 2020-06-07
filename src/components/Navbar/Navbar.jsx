import React from 'react';
import { ROUTES } from '../../helpers/routes';
import { AppLogo } from '../AppLogo/AppLogo';
import { NavbarLink } from './NavbarLink';
import { home } from 'react-icons-kit/fa/home';
import { calendarPlusO } from 'react-icons-kit/fa/calendarPlusO';
import { ic_airplanemode_active } from 'react-icons-kit/md/ic_airplanemode_active';
import { calendar } from 'react-icons-kit/fa/calendar'
import './Navbar.css';

export const Navbar = () => {
    return (
        <div className={"navbar"}>
            <AppLogo />
            <NavbarLink
                path={ROUTES.HOME}
                icon={home}
                title={'Home'}
            />
            <NavbarLink
                path={ROUTES.MY_TRAVELS}
                icon={ic_airplanemode_active}
                title={'My Travels'}
            />
            <NavbarLink
                path={ROUTES.ADD_TRAVEL}
                icon={calendarPlusO}
                title={'Add Travel'}
            />
            <NavbarLink
                path={ROUTES.TRAVEL_PLANS}
                icon={calendar}
                title={'Travel Plans'}
            />
        </div>
    )
}