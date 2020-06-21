import React, { useContext } from 'react';
import { ROUTES } from '../../helpers/routes';
import { AuthContext } from '../Auth/Auth';
import { Switch, Route } from 'react-router-dom';
import { HomeView } from '../../views/HomeView';
import { MyGardenView } from '../../views/MyGardenView';
import { AddPlantView } from '../../views/AddPlantView';
import { CarePlanView } from '../../views/CarePlanView';
import { SignInView } from '../../views/SignInView';
import { SignUpView } from '../../views/SignUpView';

export const AppContent = () => {
    const {user} = useContext(AuthContext)

    return (
        <Switch>
            <Route exact path={ROUTES.HOME} component={user ? HomeView : SignInView} />
            <Route exact path={ROUTES.ADD_PLANT} component={user ? AddPlantView : SignInView} />
            <Route exact path={ROUTES.MY_GARDEN} component={user ? MyGardenView : SignInView} />
            <Route exact path={ROUTES.CARE_PLAN} component={user ? CarePlanView : SignInView} />
            <Route exact path={ROUTES.SIGN_IN} component={SignInView} />
            <Route exact path={ROUTES.SIGN_UP} component={SignUpView} />
        </Switch>
    )
}