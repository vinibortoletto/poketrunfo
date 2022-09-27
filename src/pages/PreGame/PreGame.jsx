import React from 'react';
import { arrayOf, shape, func } from 'prop-types';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Title from '../../components/Title/Title';

import * as S from './PreGame.style';

const SLIDER_SETTINGS = {
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  variableWidth: true,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
  ],
};

export default class PreGame extends React.Component {
  state = {
    width: 0,
  };

  componentDidMount() {
    this.getWindowWidth();
  }

  getWindowWidth = () => {
    this.setState({ width: window.innerWidth });
    window.addEventListener('resize', () => {
      this.setState({ width: window.innerWidth });
    });
  };

  render() {
    const {
      deck,
      history,
      removeCard,
      getRandomDeck,
      selectCardToPlay,
      selectedCardToPlay,
    } = this.props;
    const { width } = this.state;
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
          {
            width < 1024
              ? (
                <Slider {...SLIDER_SETTINGS}>
                  {deck.map((card) => (
                    <Card
                      {...card}
                      key={card.id}
                      removeCard={removeCard}
                      selectCardToPlay={selectCardToPlay}
                      selectedCardToPlay={selectedCardToPlay}
                    />
                  ))}
                </Slider>
              )
              : (
                deck.map((card) => (
                  <Card key={card.id} {...card} removeCard={removeCard} />
                ))
              )
          }
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
}

PreGame.propTypes = {
  deck: arrayOf(shape({})).isRequired,
  history: shape({}).isRequired,
  removeCard: func.isRequired,
  getRandomDeck: func.isRequired,
};
