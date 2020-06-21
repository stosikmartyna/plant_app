import React from 'react';
import firebase from 'firebase/app';
import { Navbar } from './components/Navbar/Navbar';
import { AppContent } from './components/AppContent/AppContent';
import { AuthProvider } from './components/Auth/Auth';
import { firebaseConfig } from './components/Auth/firebaseConfig';
import './App.css';

export const App = () => {
  firebase.initializeApp(firebaseConfig);

  return (
    <AuthProvider>
      <Navbar />
      <AppContent />
    </AuthProvider>
  );
}
