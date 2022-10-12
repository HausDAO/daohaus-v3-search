import React from 'react';
import { HausThemeProvider } from '@daohaus/ui';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HausThemeProvider>
      <App />
    </HausThemeProvider>
  </React.StrictMode>
);
