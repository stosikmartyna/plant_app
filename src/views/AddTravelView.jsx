import React from 'react';
import {PageHeader} from '../components/PageHeader/PageHeader';
import {AddTravelForm} from '../components/AddTravelForm/AddTravelForm';

export const AddTravelView = () => {
  return (
    <>
      <PageHeader title={'Tell us, where have you been?'} />
      <AddTravelForm />
    </>
  );
}