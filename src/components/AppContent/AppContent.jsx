import React from 'react';
import { ROUTES } from '../../helpers/routes';
import { Switch, Route } from 'react-router-dom';
import { HomeView } from '../../views/HomeView';
import { MyGardenView } from '../../views/MyGardenView';
import { AddPlantView } from '../../views/AddPlantView';
import { CarePlanView } from '../../views/CarePlanView';
import { SignInView } from '../../views/SignInView';
import { SignUpView } from '../../views/SignUpView';

export const AppContent = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.HOME} component={() => <HomeView />} />
            <Route exact path={ROUTES.ADD_PLANT} component={() => <AddPlantView />} />
            <Route exact path={ROUTES.MY_GARDEN} component={() => <MyGardenView />} />
            <Route exact path={ROUTES.CARE_PLAN} component={() => <CarePlanView />} />
            <Route exact path={ROUTES.SIGN_IN} component={() => <SignInView />} />
            <Route exact path={ROUTES.SIGN_UP} component={() => <SignUpView />} />
        </Switch>
    )
}