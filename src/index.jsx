import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Navigation from "./navigation";
import './assets/scss/global.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Navigation />
      </BrowserRouter>
  </React.StrictMode>
)
