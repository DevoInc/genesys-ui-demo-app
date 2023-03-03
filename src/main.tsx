import React from 'react';
import ReactDOM from 'react-dom/client';

import ThemeProvider from './providers/ThemeProvider';

import { App } from './App';

// Devo's Base styles
import '@devoinc/genesys-base-styles/dist/styles.css';
// Devo's Icons font
import '@devoinc/genesys-icons/dist/gi-styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
