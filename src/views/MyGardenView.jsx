import React from 'react';
import { ViewContainer } from '../components/_library/Containers';
import { Header } from '../components/_library/Headers';
import { MyPlants } from '../components/MyPlants/MyPlants';

export const MyGardenView = () => {
  return (
    <ViewContainer background={'./background.jpg'} >
      <Header size={1} marginBottom={2}>Mój ogród</Header>
      <MyPlants />
    </ViewContainer>
  );
}