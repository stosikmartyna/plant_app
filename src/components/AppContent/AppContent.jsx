import React from 'react';
import { ROUTES } from '../../helpers/routes';
import { Switch, Route } from 'react-router-dom';
import { HomeView } from '../../views/HomeView';
import { MyGardenView } from '../../views/MyGardenView';
import { AddPlantView } from '../../views/AddPlantView';
import { CarePlanView } from '../../views/CarePlanView';
import { ViewContainer } from '../_library/Containers';

export const AppContent = () => {
    return (
        <ViewContainer>
            <Switch>
                <Route exact path={ROUTES.HOME} component={() => <HomeView />} />
                <Route path={ROUTES.ADD_PLANT} component={() => <AddPlantView />} />
                <Route path={ROUTES.MY_GARDEN} component={() => <MyGardenView />} />
                <Route path={ROUTES.CARE_PLAN} component={() => <CarePlanView />} />
            </Switch>
        </ViewContainer>
    )
}