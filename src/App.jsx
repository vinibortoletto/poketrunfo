// Libs
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Header from './components/Header/Header';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';

// Styles
import './helpers/styles/reset.css';
import GlobalStyles from './helpers/styles/Global.style';
import Footer from './components/Footer/Footer';

export default class App extends Component {
  render() {
    const { pathname } = window.location;

    return (
      <>
        <GlobalStyles />
        {pathname !== '/' && <Header />}

        <main>
          <Switch>
            <Route path="/" component={WelcomeMessage} />
          </Switch>
        </main>

        <Footer />
      </>
    );
  }
}
