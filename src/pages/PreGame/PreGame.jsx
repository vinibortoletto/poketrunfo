// Libs
import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SLIDER_SETTINGS from '../../helpers/slider/sliderSettings';

// Context
import { PokemonsContext } from '../../contexts/PokemonsContext';

// Components
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Title from '../../components/Title/Title';

// Styles
import * as S from './PreGame.style';

export default function PreGame() {
  const history = useHistory();
  const [width, setWidth] = useState(window.innerWidth);
  const { deck, selectedCardToPlay, getRandomDeck } = useContext(PokemonsContext);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    return () => window.removeEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  const deckIsFullMsg = 'Remova alguma carta antes de criar uma nova.';
  const createCardMsg = 'Crie uma carta.';
  const deckIsFull = deck.length === 10;
  const hasSelectedCard = Object.keys(selectedCardToPlay).length > 0;

  return (
    <S.Section>
      <Title text="este será seu deck" />

      <S.ButtonsContainer>
        <S.Button type="button" onClick={getRandomDeck}>
          Gerar novo deck aleatório
        </S.Button>

        <S.Button
          type="button"
          disabled={deckIsFull}
          onClick={() => history.push('/create-new-card')}
        >
          <span>{deckIsFull ? deckIsFullMsg : createCardMsg}</span>
          <span>{` (${deck.length}/10)`}</span>
        </S.Button>
      </S.ButtonsContainer>

      <S.Deck>
        {width < 1024
          ? (
            <Slider {...SLIDER_SETTINGS}>
              {deck.map((card) => (
                <Card card={card} key={card.id} />
              ))}
            </Slider>
          )
          : (
            deck.map((card) => (
              <Card key={card.id} card={card} />
            ))
          )}
      </S.Deck>

      <Button
        type="button"
        disabled={!hasSelectedCard}
        pushNewRoute={() => history.push('/game')}
      >
        {hasSelectedCard ? 'Jogar' : 'Escolha uma carta para jogar'}
      </Button>
    </S.Section>
  );
}
