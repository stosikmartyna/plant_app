import React from 'react';
import { Row } from '../components/_library/Containers';
import { Header } from '../components/_library/Headers';
import { BackgroundPlantSVG } from '../components/BackgroundPlantSVG/BackgroundPlantSVG';

export const HomeView = () => {
  return (
    <Row>
      <Header size={2}>
        Strona główna
      </Header>
      <BackgroundPlantSVG />
    </Row>
  );
}