import React from 'react';
import { shape, func } from 'prop-types';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import Title from '../../components/Title/Title';
import CardTemplate from './CardTemplate/CardTemplate';
import * as S from './CreateNewCard.style';
import SelectInput from '../../components/SelectInput/SelectInput';

export default class CreateNewCard extends React.Component {
  state = {
    cardName: '',
    cardImage: '',
    cardHP: '',
    cardAttack: '',
    cardDefense: '',
    cardSpeed: '',
    cardType: 'normal',
    cardTrunfo: false,
  };

  handleInputChange = ({ target }) => {
    const {
      name, value, type, checked,
    } = target;

    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  getRandomId = () => {
    const numberOfFirstGenPokemons = 151;
    const randomId = Math.floor(
      Math.random() * numberOfFirstGenPokemons,
    ) + numberOfFirstGenPokemons;

    const localDeck = this.getLocalDeck();
    const isRandomIdValid = !localDeck.some((card) => card.id === randomId);

    if (!isRandomIdValid) this.getRandomId();
    return randomId;
  };

  getLocalDeck = () => JSON.parse(localStorage.getItem('deck'));

  createNewCardObject = () => {
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

    return {
      id: this.getRandomId(),
      image: cardImage,
      name: cardName,
      stats: [
        {
          id: 0,
          name: 'Vida',
          points: cardHP,
        },
        {
          id: 1,
          name: 'Ataque',
          points: cardAttack,
        },
        {
          id: 2,
          name: 'Defesa',
          points: cardDefense,
        },
        {
          id: 3,
          name: 'Velocidade',
          points: cardSpeed,
        },
      ],
      trunfo: cardTrunfo,
      type: cardType,
    };
  };

  validateCard = () => {
    const {
      cardName,
      cardImage,
      cardHP,
      cardAttack,
      cardDefense,
      cardSpeed,
      cardType,
    } = this.state;

    return (
      cardName !== ''
      && cardImage !== ''
      && cardHP !== ''
      && cardAttack !== ''
      && cardDefense !== ''
      && cardSpeed !== ''
      && cardType !== ''
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { history, addCard } = this.props;
    const isValid = this.validateCard();

    if (isValid) {
      addCard(this.createNewCardObject());
      history.push('/pre-game');
    }
  };

  render() {
    const { handleInputChange, handleSubmit } = this;
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

    return (
      <S.Section>
        <div>
          <Title text="CRIA SUA CARTA" />

          <S.Form onSubmit={handleSubmit}>
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

            <SelectInput
              cardType={cardType}
              handleInputChange={handleInputChange}
            />

            <InputField
              label="Super Trunfo"
              type="checkbox"
              name="cardTrunfo"
              value={cardTrunfo}
              onChange={handleInputChange}
            />

            <Button type="submit">
              Salvar
            </Button>
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
      </S.Section>
    );
  }
}

CreateNewCard.propTypes = {
  history: shape({}).isRequired,
  addCard: func.isRequired,
};
