import React from 'react';
import { Link } from 'react-router-dom';
import { arrayOf, shape } from 'prop-types';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Title from '../../components/Title/Title';

import * as S from './PreGame.style';

const SLIDER_SETTINGS = {
  className: 'center',
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  centerMode: true,
  arrows: false,
  infinite: true,
};

export default class PreGame extends React.Component {
  state = {
    width: window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ width: window.innerWidth });
    });
  }

  render() {
    const { deck } = this.props;
    const { width } = this.state;

    return (
      <S.Section>
        <Title text="este será seu deck" />

        <S.ButtonsContainer>
          <S.Button>
            Gerar novo deck aleatório
          </S.Button>

          <S.Button>
            <Link to="/create-new-card">
              Criar nova carta
            </Link>
          </S.Button>
        </S.ButtonsContainer>

        <S.CardList>
          {
            width < 1024 ? (
              <Slider {...SLIDER_SETTINGS}>
                {deck.map((card) => (
                  <Card key={card.id} {...card} />
                ))}
              </Slider>
            )
              : (
                deck.map((card) => (
                  <Card key={card.id} {...card} />
                ))
              )
          }

        </S.CardList>

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
};
