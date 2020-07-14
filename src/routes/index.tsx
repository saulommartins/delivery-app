import React, { useContext } from 'react';
import { useAuth } from '../contexts/auth';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const { signed, loading  } = useAuth();
  return (<AppRoutes />);
}

export default Routes;