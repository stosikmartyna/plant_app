import React from 'react';
import AddPlantForm from '../components/AddPlantForm/AddPlantForm';
import { Header } from '../components/_library/Headers';
import { ViewContainer } from '../components/_library/Containers';

export const AddPlantView = () => {
  return (
    <ViewContainer>
      <Header size={1}>Dodaj roślinę</Header>
      <AddPlantForm />
    </ViewContainer>
  );
}