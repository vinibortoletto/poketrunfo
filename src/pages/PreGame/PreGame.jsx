import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import * as Styled from './PreGame.style';

export default class PreGame extends React.Component {
  render() {
    return (
      <Styled.Section>
        <Title text="este será seu deck" />

        <div>
          <Styled.Button>
            Gerar novo deck aleatório
          </Styled.Button>

          <Styled.Button>
            <Link to="/create-new-card">
              Criar nova carta
            </Link>
          </Styled.Button>
        </div>

        <div>
          deck
        </div>

        <div>
          <Button
            title="Jogar"
            type="button"
            path="/game"
          />
        </div>
      </Styled.Section>
    );
  }
}
