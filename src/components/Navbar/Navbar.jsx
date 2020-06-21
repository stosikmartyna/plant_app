import React, { useContext } from 'react';
import firebase from 'firebase/app';
import { ROUTES } from '../../helpers/routes';
import { AuthContext } from '../Auth/Auth';
import { AppLogo } from '../_library/AppLogo';
import { NavbarLink } from '../_library/NavbarLink';
import { home } from 'react-icons-kit/fa/home';
import { leaf } from 'react-icons-kit/entypo/leaf';
import { plus } from 'react-icons-kit/typicons/plus';
import { calendar } from 'react-icons-kit/fa/calendar';
import { userPlus } from 'react-icons-kit/fa/userPlus';
import { userTimes } from 'react-icons-kit/fa/userTimes';
import { NavContainer } from '../_library/Containers';

export const Navbar = () => {
    const {currentUser} = useContext(AuthContext)

    const signOut = () => {
        firebase.auth().signOut();
    }

    return (
        <NavContainer>
            <AppLogo size={6} />
            <NavbarLink
                path={ROUTES.HOME}
                icon={home}
                title={'Strona główna'}
            />
            <NavbarLink
                path={ROUTES.ADD_PLANT}
                icon={plus}
                title={'Dodaj roślinę'}
            />
            <NavbarLink
                path={ROUTES.MY_GARDEN}
                icon={leaf}
                title={'Mój ogród'}
            />
            <NavbarLink
                path={ROUTES.CARE_PLAN}
                icon={calendar}
                title={'Plan opieki'}
            />
            {!currentUser 
                ? (
                    <NavbarLink
                        path={ROUTES.SIGN_IN}
                        icon={userPlus}
                        title={'ZALOGUJ'}
                    />
                ) : (
                    <NavbarLink
                        path={ROUTES.HOME}
                        icon={userTimes}
                        title={'WYLOGUJ'}
                        onClick={signOut}
                    />
                )
            }
        </NavContainer>
    )
}