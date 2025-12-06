import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Note the .tsx extension
import './assets/styles.css'; 

// Use non-null assertion (!) because we are sure #root exists in index.html
ReactDOM.createRoot(document.getElementById('root')!).render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);