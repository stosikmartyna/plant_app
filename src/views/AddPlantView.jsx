import React from 'react';
import { Header } from '../components/_library/Headers';
import { AddPlantForm } from '../components/AddPlantForm/AddPlantForm';

export const AddPlantView = () => {
  return (
    <>
      <Header size={1} marginBottom={2}>Dodaj roślinę</Header>
      <AddPlantForm />
    </>
  );
}