import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppBackgroundColor from './AppBackgroundColor';  // Correctly import AppBackgroundColor
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppBackgroundColor
      heading="Background Color Changer"
      lbl="Enter a Color:"
      color="colorInput"
    />
  </React.StrictMode>
);

reportWebVitals();
