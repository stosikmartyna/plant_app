import React from 'react';
import { Header } from '../components/_library/Headers';
import { MyPlants } from '../components/MyPlants/MyPlants';

export const MyGardenView = () => {
  return (
    <>
      <Header size={1} marginBottom={2}>Mój ogród</Header>
      <MyPlants />
    </>
  );
}