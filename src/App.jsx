// Libs
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Welcome from './pages/Welcome/Welcome';
import PreGame from './pages/PreGame/PreGame';

// Styles
import './helpers/styles/reset.css';
import GlobalStyles from './helpers/styles/Global.style';

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Header />

        <main>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/pre-game" component={PreGame} />
          </Switch>
        </main>

        <Footer />
      </>
    );
  }
}
