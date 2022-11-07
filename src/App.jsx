// Libs
import React, { useContext } from 'react';
import { Route } from 'react-router-dom';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Welcome from './pages/Welcome/Welcome';
import PreGame from './pages/PreGame/PreGame';

// Styles
import './helpers/styles/reset.css';
import GlobalStyles from './helpers/styles/Global.style';
import CreateNewCard from './pages/CreateNewCard/CreateNewCard';
import Loading from './components/Loading/Loading';
import Game from './pages/Game/Game';
import { PokemonsContext } from './contexts/PokemonsContext';

export default function App() {
  const {
    isLoading,
    pathname,
  } = useContext(PokemonsContext);

  return (
    <>
      <GlobalStyles />

      {isLoading
        ? <Loading />
        : (
          <>
            {pathname !== '/' && <Header />}

            <main>
              <Route
                exact
                path="/"
                component={Welcome}
              />

              <Route
                exact
                path="/pre-game"
                component={PreGame}
              />

              <Route
                exact
                path="/create-new-card"
                component={CreateNewCard}
              />

              <Route
                exact
                path="/game"
                component={Game}
              />
            </main>

            <Footer />
          </>
        )}
    </>
  );
}
