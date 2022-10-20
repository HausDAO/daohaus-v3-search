import React from 'react';
import { HausThemeProvider } from '@daohaus/ui';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HausConnectProvider } from '@daohaus/daohaus-connect-feature';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HausThemeProvider>
      <HausConnectProvider>
        <App />
      </HausConnectProvider>
    </HausThemeProvider>
  </React.StrictMode>
);
