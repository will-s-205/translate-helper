import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/LocalStorage/AppLocalStorage';
import App from './components/Translator/AppTranslator';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
