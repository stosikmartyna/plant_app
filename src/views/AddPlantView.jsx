import React from 'react';
import { Header } from '../components/_library/Headers';
import { AddPlantForm } from '../components/AddPlantForm/AddPlantForm';

export const AddPlantView = () => {
  return (
    <>
      <Header size={2}>Add plant</Header>
      <AddPlantForm />
    </>
  );
}