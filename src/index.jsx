import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <App />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
);
