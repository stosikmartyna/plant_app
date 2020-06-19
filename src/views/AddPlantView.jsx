import React from 'react';
import { Header } from '../components/_library/Headers';
import { AddPlantForm } from '../components/AddPlantForm/AddPlantForm';

export const AddPlantView = () => {
  return (
    <>
      <Header size={1}>Dodaj roślinę</Header>
      <AddPlantForm />
    </>
  );
}