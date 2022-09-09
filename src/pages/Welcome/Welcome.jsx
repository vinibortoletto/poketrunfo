import React from 'react';

import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import SeparatorBars from './SeparatorBars/SeparatorBars';

import * as S from './Welcome.style';

export default class Welcome extends React.Component {
  render() {
    return (
      <S.YellowContainer>
        <S.BlueContainer>
          <S.LightBlueContainer>
            <S.Title>
              <h1>Bem-vinde ao</h1>
              <Logo />
            </S.Title>

            <SeparatorBars />

            <S.Content>
              <h2>Como jogar:</h2>

              <p>Um baralho de cartas é gerado aleatoriamente para você e o computador.</p>

              <p>Cada carta possui pontos de habilidades.</p>

              <p>
                A cada rodada será comparada uma carta sua com uma do computador.
                A que tiver maior pontuação ganha a rodada. Quem vencer mais rodadas, vence o jogo.
              </p>

              <p>
                Você também pode gerar novos baralhos aleatórios,
                ou até remover cartas e criar sua própria.
              </p>
            </S.Content>

            <SeparatorBars />

            <div>
              <Button type="button" title="Continuar" path="/pre-game" />
            </div>
          </S.LightBlueContainer>
        </S.BlueContainer>
      </S.YellowContainer>
    );
  }
}
