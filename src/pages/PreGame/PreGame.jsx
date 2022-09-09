import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Title from '../../components/Title/Title';

import * as S from './PreGame.style';

export default class PreGame extends React.Component {
  render() {
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
          <Card />
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
