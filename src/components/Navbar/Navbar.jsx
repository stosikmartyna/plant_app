import React from 'react';
import { ROUTES } from '../../helpers/routes';
import { AppLogo } from '../_library/AppLogo';
import { NavbarLink } from '../_library/NavbarLink';
import { home } from 'react-icons-kit/fa/home';
import { leaf } from 'react-icons-kit/entypo/leaf';
import { plus } from 'react-icons-kit/typicons/plus';
import { calendar } from 'react-icons-kit/fa/calendar';
import { NavContainer } from '../_library/Containers';

export const Navbar = () => {
    return (
        <NavContainer>
            <AppLogo />
            <NavbarLink
                path={ROUTES.HOME}
                icon={home}
                title={'Home'}
            />
            <NavbarLink
                path={ROUTES.ADD_PLANT}
                icon={plus}
                title={'Add Plant'}
            />
            <NavbarLink
                path={ROUTES.MY_GARDEN}
                icon={leaf}
                title={'My Garden'}
            />
            <NavbarLink
                path={ROUTES.CARE_PLAN}
                icon={calendar}
                title={'Care Plan'}
            />
        </NavContainer>
    )
}