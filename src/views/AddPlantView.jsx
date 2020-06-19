import React from 'react';
import { Header } from '../components/_library/Headers';
import { AddPlantForm } from '../components/AddPlantForm/AddPlantForm';
import { ViewContainer } from '../components/_library/Containers';

export const AddPlantView = () => {
  return (
    <ViewContainer>
      <Header size={1}>Dodaj roślinę</Header>
      <AddPlantForm />
    </ViewContainer>
  );
}