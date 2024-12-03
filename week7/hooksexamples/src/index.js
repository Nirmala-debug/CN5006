import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Ensure this path is correct
import Hook_ControlledButtonState from './counter';  // Import from counter.js
import EmojiCounter from './EmojiCounter';  // Imp

ReactDOM.render(
  <React.StrictMode>
    <Hook_ControlledButtonState /> 
    <EmojiCounter pic="Love" />
    <EmojiCounter pic="sad" />
    <EmojiCounter pic="Like" />
    <EmojiCounter pic="happy" />
  </React.StrictMode>,
  document.getElementById('root')
);




