import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
  html {
    font-size: 15px;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body { 
    margin: 0;
    padding: 0;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Globals />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
