import React from 'react';
import Card from '../../components/Card/Card';
import InputField from '../../components/InputField/InputField';
import Title from '../../components/Title/Title';
import CardTemplate from './CardTemplate/CardTemplate';
import * as S from './CreateNewCard.style';

export default class CreateNewCard extends React.Component {
  state = {
    cardName: '',
    cardImage: '',
    cardHP: '',
    cardAttack: '',
    cardDefense: '',
    cardSpeed: '',
    cardType: '',
    cardTrunfo: false,
  };

  handleInputChange = ({ target }) => {
    const {
      name, value, type, checked,
    } = target;

    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  render() {
    const { handleInputChange } = this;
    const {
      cardName,
      cardImage,
      cardHP,
      cardAttack,
      cardDefense,
      cardSpeed,
      cardType,
      cardTrunfo,
    } = this.state;

    const cardStats = [
      {
        id: 0,
        name: 'hp',
        points: cardHP,
      },

      {
        id: 1,
        name: 'ataque',
        points: cardAttack,
      },

      {
        id: 2,
        name: 'defesa',
        points: cardDefense,
      },

      {
        id: 3,
        name: 'velocidade',
        points: cardSpeed,
      },
    ];

    const pokemonTypes = [
      'normal',
      'fire',
      'water',
      'grass',
      'electric',
      'ice',
      'fighting',
      'poison',
      'ground',
      'flying',
      'psychic',
      'bug',
      'rock',
      'ghost',
      'dark',
      'dragon',
      'steel',
      'fairy',
    ];

    return (
      <section>
        <div>
          <Title text="CRIA SUA CARTA" />

          <S.Form>
            <InputField
              label="Nome da carta:"
              type="text"
              name="cardName"
              value={cardName}
              placeholder="Pikachu"
              onChange={handleInputChange}
            />

            <InputField
              label="Imagem:"
              type="text"
              name="cardImage"
              value={cardImage}
              placeholder="https://www.duckduckgo.com/"
              onChange={handleInputChange}
            />

            <div>
              <InputField
                label="HP:"
                type="number"
                name="cardHP"
                value={cardHP}
                placeholder="99"
                onChange={handleInputChange}
              />

              <InputField
                label="Ataque:"
                type="number"
                name="cardAttack"
                value={cardAttack}
                placeholder="99"
                onChange={handleInputChange}
              />

              <InputField
                label="Defesa:"
                type="number"
                name="cardDefense"
                value={cardDefense}
                placeholder="99"
                onChange={handleInputChange}
              />

              <InputField
                label="Velocidade:"
                type="number"
                name="cardSpeed"
                value={cardSpeed}
                placeholder="99"
                onChange={handleInputChange}
              />
            </div>

            <label htmlFor="cardType">
              <select
                name="cardType"
                id="cardType"
                value={cardType}
                onChange={handleInputChange}
              >
                {pokemonTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </label>

            <InputField
              label="Super Trunfo"
              type="checkbox"
              name="cardTrunfo"
              value={cardTrunfo}
              onChange={handleInputChange}
            />
          </S.Form>
        </div>

        <div>
          <CardTemplate
            cardName={cardName}
            cardImage={cardImage}
            cardStats={cardStats}
            cardType={cardType}
            cardTrunfo={cardTrunfo}
          />
        </div>
      </section>
    );
  }
}
