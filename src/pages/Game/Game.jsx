import React from 'react';
import {
  number, string, arrayOf, bool, shape,
} from 'prop-types';
import Card from '../../components/Card/Card';

export default class Game extends React.Component {
  render() {
    const { selectedCardToPlay } = this.props;

    return (
      <div>

        <Card {...selectedCardToPlay} selectedCardToPlay={selectedCardToPlay} />
      </div>
    );
  }
}

Game.propTypes = {
  selectedCardToPlay: shape({}).isRequired,
};
