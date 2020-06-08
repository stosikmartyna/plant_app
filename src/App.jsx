import React from 'react';
import {Navbar} from './components/Navbar/Navbar';
import {AppContent} from './components/AppContent/AppContent';
import './App.css';

export const App = () => {
  return (
    <>
      <Navbar />
      <AppContent />
    </>
  );
}
