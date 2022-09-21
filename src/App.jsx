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
import Loading from './components/Loading/Loading';

export default class App extends Component {
  state = {
    deck: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    const localDeck = JSON.parse(localStorage.getItem('deck'));
    if (localDeck) this.setState({ deck: [...localDeck] });
    else await this.getRandomDeck();

    this.setState({ isLoading: false });
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

  createPokemonObject = (pokemon) => {
    const {
      id,
      name,
      sprites,
      stats,
      types,
    } = pokemon;

    return {
      id,
      name,
      image: sprites.other['official-artwork'].front_default,
      stats: [
        {
          id: 0,
          name: 'Vida',
          points: stats[0].base_stat,
        },
        {
          id: 1,
          name: 'Ataque',
          points: stats[1].base_stat,
        },
        {
          id: 2,
          name: 'Defesa',
          points: stats[2].base_stat,
        },
        {
          id: 3,
          name: 'Velocidade',
          points: stats[5].base_stat,
        },
      ],
      type: types[0].type.name,
      trunfo: false,
    };
  };

  getRandomDeck = async () => {
    this.setState({ isLoading: true });

    const randomPokemon = await this.getRandomPokemon();
    const randomPokemonInfo = await fetchPokemonInfo(randomPokemon.name);
    const randomDeck = [this.createPokemonObject(randomPokemonInfo)];

    for (let i = 0; randomDeck.length !== 10; i += 1) {
      const newRandomPokemon = await this.getRandomPokemon();
      const hasPokemon = randomDeck.some(({ name }) => name === newRandomPokemon.name);

      if (!hasPokemon) {
        const newRandomPokemonInfo = await fetchPokemonInfo(newRandomPokemon.name);
        randomDeck.push(this.createPokemonObject(newRandomPokemonInfo));
      }
    }

    localStorage.setItem('deck', JSON.stringify(randomDeck));
    this.setState({
      deck: [...randomDeck],
      isLoading: false,
    });
  };

  removeCard = (cardId) => {
    const { deck } = this.state;
    const newDeck = deck.filter(({ id }) => id !== cardId);
    localStorage.setItem('deck', JSON.stringify(newDeck));
    this.setState({ deck: [...newDeck] });
  };

  addCard = (newCard) => {
    const { deck } = this.state;
    const newDeck = [...deck, newCard];
    localStorage.setItem('deck', JSON.stringify(newDeck));
    this.setState({ deck: [...newDeck] });
  };

  render() {
    const {
      getRandomDeck,
      removeCard,
      createPokemonObject,
      addCard,
    } = this;
    const { deck, isLoading } = this.state;
    const { location: { pathname } } = this.props;

    return (
      <>
        <GlobalStyles />

        {
          isLoading
            ? <Loading />
            : (
              <>
                {pathname !== '/' && <Header />}

                <main>
                  <Route exact path="/" render={(props) => <Welcome {...props} />} />
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
                  <Route
                    exact
                    path="/create-new-card"
                    render={(props) => (
                      <CreateNewCard
                        {...props}
                        deck={deck}
                        createPokemonObject={createPokemonObject}
                        addCard={addCard}
                      />
                    )}
                  />
                </main>

                <Footer />
              </>
            )
        }

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
