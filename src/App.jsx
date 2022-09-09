// Libs
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { string, shape } from 'prop-types';

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
    const { location: { pathname } } = this.props;

    return (
      <>
        <GlobalStyles />

        {pathname !== '/' && <Header />}

        <main>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/pre-game" component={PreGame} />
        </main>

        <Footer />
      </>
    );
  }
}

App.defaultProps = {
  location: {},
};

App.propTypes = {
  location: shape({
    pathname: string,
  }),
};
