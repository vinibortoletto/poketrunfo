import React from 'react';
import { Link } from 'react-router-dom';
import { arrayOf, shape } from 'prop-types';

import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Title from '../../components/Title/Title';

import * as S from './PreGame.style';

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
          {deck.map((card) => (
            <Card key={card.id} {...card} />
          ))}
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
