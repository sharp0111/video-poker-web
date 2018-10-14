import React, { Component } from 'react';

class Card extends Component {
  render() {
    const suit = {
      'S': 'Spades',
      'H': 'Hearts',
      'C': 'Clubs',
      'D': 'Diamonds'
    };

    const rank = {
      'A': 'Ace',
      '2': 'Deuce',
      '3': 'Three',
      '4': 'Four',
      '5': 'Five',
      '6': 'Six',
      '7': 'Seven',
      '8': 'Eight',
      '9': 'Nine',
      'T': 'Ten',
      'J': 'Jack',
      'Q': 'Queen',
      'K': 'King'
    };

    return (
      <div className="wrapper">
        <div className="card">
          <div className={`${this.props.suit} mark dark`}>{this.props.rank}</div>
          <div className="content ">
            <h1>{rank[this.props.rank]}</h1>
            <h2><sup>OF</sup><span className="dark">{suit[this.props.suit]}</span></h2>
          </div>
          <div className={`${this.props.suit} mark upside-down`}>{this.props.rank}</div>
        </div>
      </div>
    );
  }
}

export default Card;