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
  className: 'slider variable-width',
  slidesToShow: 1,
  slidesToScroll: 5,
  variableWidth: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default class PreGame extends React.Component {
  render() {
    const { deck } = this.props;

    return (
      <S.Section>
        <Title text="este será seu deck" />

        <div>
          <S.Button>
            Gerar novo deck aleatório
          </S.Button>

          <S.Button>
            <Link to="/create-new-card">
              Criar nova carta
            </Link>
          </S.Button>
        </div>

        <S.CardList>
          <Slider {...SLIDER_SETTINGS}>
            {deck.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </Slider>
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
