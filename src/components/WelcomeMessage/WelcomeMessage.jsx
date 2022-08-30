import React from 'react';
import Logo from '../Logo/Logo';
import SeparatorBars from './SeparatorBars/SeparatorBars';
import * as Styled from './WelcomeMessage.style';

export default class WelcomeMessage extends React.Component {
  render() {
    return (
      <Styled.YellowContainer>
        <Styled.BlueContainer>
          <Styled.LightBlueContainer>
            <Styled.Title>
              <h1>Bem-vinde ao</h1>
              <Logo />
            </Styled.Title>

            <SeparatorBars />

            <Styled.Content>
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
            </Styled.Content>

            <SeparatorBars />

            <div>
              <button type="button" data-testid="continue-button">Continuar</button>
            </div>
          </Styled.LightBlueContainer>
        </Styled.BlueContainer>
      </Styled.YellowContainer>
    );
  }
}
