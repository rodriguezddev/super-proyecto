import React from 'react';
import { Navigate } from 'react-router-dom';

// Simulación de una función de autenticación
const isAuthenticated = () => {

  // return localStorage.getItem('authToken') !== null;
  return true;
};

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

export default PrivateRoute;