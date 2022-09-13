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
import CreateNewCard from './pages/CreateNewCard/CreateNewCard';

export default class App extends Component {
  state = {
    deck: [],
  };

  async componentDidMount() {
    const localDeck = JSON.parse(localStorage.getItem('deck'));
    if (localDeck) this.setState({ deck: [...localDeck] });
    else this.getRandomDeck();
  }

  componentDidUpdate(prevProps) {
    this.scrollToTopOnRouteChange(prevProps);
  }

  scrollToTopOnRouteChange = (prevProps) => {
    const { location: { pathname: currPathname } } = this.props;
    const prevPathname = prevProps.location.pathname;
    if (currPathname !== prevPathname) window.scrollTo(0, 0);
  };

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

    for (let i = 0; randomDeck.length !== 10; i += 1) {
      const newRandomPokemon = await this.getRandomPokemon();
      const hasPokemon = randomDeck.some(({ name }) => name === newRandomPokemon.name);

      if (!hasPokemon) {
        const newRandomPokemonInfo = await fetchPokemonInfo(newRandomPokemon.name);
        randomDeck.push(newRandomPokemonInfo);
      }
    }

    localStorage.setItem('deck', JSON.stringify(randomDeck));
    this.setState({ deck: [...randomDeck] });
  };

  removeCard = (cardId) => {
    const { deck } = this.state;
    const newDeck = deck.filter(({ id }) => id !== cardId);
    localStorage.setItem('deck', JSON.stringify(newDeck));
    this.setState({ deck: [...newDeck] });
  };

  render() {
    const { getRandomDeck, removeCard } = this;
    const { deck } = this.state;
    const { location: { pathname } } = this.props;

    return (
      <>
        <GlobalStyles />

        {pathname !== '/' && <Header />}

        <main>
          <Route exact path="/" component={Welcome} />
          <Route
            exact
            path="/pre-game"
            render={(props) => (
              <PreGame
                {...props}
                deck={deck}
                removeCard={removeCard}
                getRandomDeck={getRandomDeck}
              />
            )}
          />
          <Route exact path="/create-new-card" render={() => <CreateNewCard />} />
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
