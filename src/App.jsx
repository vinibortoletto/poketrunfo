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
import { fetchFirstGenPokemons, fetchPokemonInfo } from './api/pokeapi';

export default class App extends Component {
  state = {
    deck: [],
  };

  async componentDidMount() {
    this.getRandomDeck();
  }

  getRandomPokemon = async () => {
    const deck = await fetchFirstGenPokemons();
    const randomNumber = Math.floor(Math.random() * 151);
    const randomPokemon = deck[randomNumber];
    return randomPokemon;
  };

  getRandomDeck = async () => {
    const randomPokemon = await this.getRandomPokemon();
    const randomPokemonInfo = await fetchPokemonInfo(randomPokemon.name);
    const randomDeck = [randomPokemonInfo];

    for (let i = 0; randomDeck.length !== 20; i += 1) {
      const newRandomPokemon = await this.getRandomPokemon();
      const hasPokemon = randomDeck.some(({ name }) => name === newRandomPokemon.name);

      if (!hasPokemon) {
        const newRandomPokemonInfo = await fetchPokemonInfo(newRandomPokemon.name);
        randomDeck.push(newRandomPokemonInfo);
      }
    }

    this.setState({ deck: [...randomDeck] });
  };

  render() {
    const { location: { pathname } } = this.props;
    const { deck } = this.state;

    return (
      <>
        <GlobalStyles />

        {pathname !== '/' && <Header />}

        <main>
          <Route exact path="/" component={Welcome} />
          <Route
            exact
            path="/pre-game"
            render={() => <PreGame deck={deck} />}
          />
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
