import React, { useContext } from 'react';
import Card from '../../components/Card/Card';
import { PokemonsContext } from '../../contexts/PokemonsContext';

export default function Game() {
  const { selectedCardToPlay } = useContext(PokemonsContext);

  return (
    <div>
      <Card {...selectedCardToPlay} selectedCardToPlay={selectedCardToPlay} />
    </div>
  );
}
