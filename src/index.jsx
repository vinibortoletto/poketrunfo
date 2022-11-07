import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch } from 'react-router-dom';
import App from './App';
import { PokemonsProvider } from './contexts/PokemonsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <PokemonsProvider>
          <App />
        </PokemonsProvider>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
);
