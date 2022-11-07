import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import Title from '../../components/Title/Title';
import CardTemplate from './CardTemplate/CardTemplate';
import * as S from './CreateNewCard.style';
import SelectInput from '../../components/SelectInput/SelectInput';
import { PokemonsContext } from '../../contexts/PokemonsContext';

export default function CreateNewCard() {
  const history = useHistory();
  const { addCard } = useContext(PokemonsContext);
  const [newCard, setNewCard] = useState({
    name: '',
    image: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    type: 'normal',
    trunfo: false,
  });

  const getLocalDeck = () => JSON.parse(localStorage.getItem('deck'));

  const getRandomId = () => {
    const numberOfFirstGenPokemons = 151;
    const randomId = Math.floor(
      Math.random() * numberOfFirstGenPokemons,
    ) + numberOfFirstGenPokemons;

    const localDeck = getLocalDeck();
    const isRandomIdValid = !localDeck.some((card) => card.id === randomId);

    if (!isRandomIdValid) getRandomId();
    return randomId;
  };

  const createNewCardObject = () => ({
    id: getRandomId(),
    image: newCard.image,
    name: newCard.name,
    stats: [
      {
        id: 0,
        name: 'Vida',
        points: newCard.hp,
      },
      {
        id: 1,
        name: 'Ataque',
        points: newCard.attack,
      },
      {
        id: 2,
        name: 'Defesa',
        points: newCard.defense,
      },
      {
        id: 3,
        name: 'Velocidade',
        points: newCard.speed,
      },
    ],
    trunfo: newCard.trunfo,
    type: newCard.type,
  });

  const validateCard = () => (
    newCard.name !== ''
      && newCard.image !== ''
      && newCard.hp !== ''
      && newCard.attack !== ''
      && newCard.defense !== ''
      && newCard.speed !== ''
      && newCard.type !== ''
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateCard();

    if (isValid) {
      addCard(createNewCardObject());
      history.push('/pre-game');
    }
  };

  const cardStats = [
    {
      id: 0,
      name: 'hp',
      points: newCard.hp,
    },

    {
      id: 1,
      name: 'ataque',
      points: newCard.attack,
    },

    {
      id: 2,
      name: 'defesa',
      points: newCard.defense,
    },

    {
      id: 3,
      name: 'velocidade',
      points: newCard.speed,
    },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setNewCard({
      ...newCard,
      [name]: value,
    });
  };

  return (
    <S.Section>
      <div>
        <Title text="CRIA SUA CARTA" />

        <S.Form onSubmit={handleSubmit}>
          <InputField
            label="Nome da carta:"
            type="text"
            name="name"
            value={newCard.name}
            placeholder="Pikachu"
            onChange={handleInputChange}
          />

          <InputField
            label="Imagem:"
            type="text"
            name="image"
            value={newCard.image}
            placeholder="https://www.duckduckgo.com/"
            onChange={handleInputChange}
          />

          <div>
            <InputField
              label="HP:"
              type="number"
              name="hp"
              value={newCard.hp}
              placeholder="99"
              onChange={handleInputChange}
            />

            <InputField
              label="Ataque:"
              type="number"
              name="attack"
              value={newCard.attack}
              placeholder="99"
              onChange={handleInputChange}
            />

            <InputField
              label="Defesa:"
              type="number"
              name="defense"
              value={newCard.defense}
              placeholder="99"
              onChange={handleInputChange}
            />

            <InputField
              label="Velocidade:"
              type="number"
              name="speed"
              value={newCard.speed}
              placeholder="99"
              onChange={handleInputChange}
            />
          </div>

          <SelectInput
            cardType={newCard.type}
            handleInputChange={handleInputChange}
          />

          <InputField
            label="Super Trunfo"
            type="checkbox"
            name="trunfo"
            value={newCard.trunfo}
            onChange={handleInputChange}
          />

          <Button type="submit">
            Salvar
          </Button>
        </S.Form>
      </div>

      <div>
        <CardTemplate
          cardName={newCard.name}
          cardImage={newCard.image}
          cardStats={cardStats}
          cardType={newCard.type}
          cardTrunfo={newCard.trunfo}
        />
      </div>
    </S.Section>
  );
}
