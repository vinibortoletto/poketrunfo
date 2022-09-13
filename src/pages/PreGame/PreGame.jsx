import React from 'react';
import { arrayOf, shape, func } from 'prop-types';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Title from '../../components/Title/Title';

import * as S from './PreGame.style';

const SLIDER_SETTINGS = {
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  arrows: false,
  infinite: true,
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
      deck, history, removeCard, getRandomDeck,
    } = this.props;
    const { width } = this.state;
    const deckIsFullMsg = 'Remova alguma carta antes de criar uma nova.';
    const createCardMsg = 'Crie uma carta.';
    const deckIsFull = deck.length === 10;

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
                    <Card key={card.id} {...card} removeCard={removeCard} />
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
          title="Jogar"
          type="button"
          path="/game"
        />
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
