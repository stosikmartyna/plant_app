import React from 'react';
import { ViewContainer } from '../components/_library/Containers';
import { Header } from '../components/_library/Headers';
import { PlantsAtlas } from '../components/PlantsAtlas/PlantsAtlas';

export const PlantsAtlasView = () => {
  return (
    <ViewContainer background={'./background.jpg'}>
      <Header size={1} marginBottom={2}>Atlas roślin</Header>
      <PlantsAtlas/>
    </ViewContainer>
  );
}