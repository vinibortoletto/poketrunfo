import { node } from 'prop-types';
import React, {
  createContext, useMemo, useState, useEffect,
} from 'react';
import { useHistory } from 'react-router-dom';
import { fetchFirstGenPokemons, fetchPokemonInfo } from '../api/pokeapi';

export const PokemonsContext = createContext();

export function PokemonsProvider({ children }) {
  const history = useHistory();
  const { pathname } = history.location;

  const [isLoading, setIsLoading] = useState(false);
  const [deck, setDeck] = useState([]);
  const [selectedCardToPlay, setSelectedCardToPlay] = useState({});

  useEffect(() => window.scrollTo(0, 0), [pathname]);

  const createPokemonObject = (pokemon) => {
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

  const getRandomPokemon = async () => {
    const newDeck = await fetchFirstGenPokemons();
    const randomNumber = Math.floor(Math.random() * 151);
    const randomPokemon = newDeck[randomNumber];
    return randomPokemon;
  };

  const getRandomDeck = async () => {
    setIsLoading(true);

    const randomPokemon = await getRandomPokemon();
    const randomPokemonInfo = await fetchPokemonInfo(randomPokemon.name);
    const randomDeck = [createPokemonObject(randomPokemonInfo)];

    for (let i = 0; randomDeck.length !== 10; i += 1) {
      const newRandomPokemon = await getRandomPokemon();
      const hasPokemon = randomDeck.some(({ name }) => name === newRandomPokemon.name);

      if (!hasPokemon) {
        const newRandomPokemonInfo = await fetchPokemonInfo(newRandomPokemon.name);
        randomDeck.push(createPokemonObject(newRandomPokemonInfo));
      }
    }

    localStorage.setItem('deck', JSON.stringify(randomDeck));
    setDeck([...randomDeck]);
    setIsLoading(false);
  };

  const removeCard = (cardId) => {
    const newDeck = deck.filter(({ id }) => id !== cardId);
    localStorage.setItem('deck', JSON.stringify(newDeck));
    setDeck([...newDeck]);
  };

  const addCard = (newCard) => {
    const newDeck = [...deck, newCard];
    localStorage.setItem('deck', JSON.stringify(newDeck));
    setDeck([...newDeck]);
  };

  const selectCardToPlay = (cardId) => {
    const selectedCard = deck.find(({ id }) => id === cardId);
    setSelectedCardToPlay({ ...selectedCard });
  };

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);

      const localDeck = JSON.parse(localStorage.getItem('deck'));
      if (localDeck) setDeck([...localDeck]);
      else await getRandomDeck();

      setIsLoading(false);
    };

    fetch();
  }, []);

  const value = useMemo(() => ({
    isLoading,
    deck,
    selectedCardToPlay,
    setSelectedCardToPlay,
    pathname,
    removeCard,
    addCard,
    selectCardToPlay,
    getRandomDeck,
  }));

  return (
    <PokemonsContext.Provider value={value}>
      {children}
    </PokemonsContext.Provider>
  );
}

PokemonsProvider.propTypes = {
  children: node.isRequired,
};
