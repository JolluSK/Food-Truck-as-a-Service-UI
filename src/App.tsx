import React from 'react';
import './App.css';

import { AppProvider } from './providers'
import { PublicRoutes } from './routes';

function App() {
  return (
    <AppProvider>
      <PublicRoutes />
    </AppProvider>
  );
}

export default App;
