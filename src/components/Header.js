import React from 'react';

export default function Header() {
    return (<div>
        <h1>Video Poker</h1>
        <h2>Winning Hands:</h2>
        <p>Straight (500 points): Five cards of consecutive rank. Example: 9<span role="img" aria-label="Spades">♠️</span>&nbsp;
        10<span role="img" aria-label="Spades">♠️</span>&nbsp;
        J<span role="img" aria-label="Diamons">️️♦</span>️&nbsp;
        Q<span role="img" aria-label="Hearts">♥️</span>&nbsp;
        K<span role="img" aria-label="Diamonds">♦️</span></p>
        <p>Pair (100 points): Two cards of the same rank. Example: 5<span role="img" aria-label="Clubs">♣️</span>&nbsp;
        5<span role="img" aria-label="Diamonds">♦️</span></p>
    </div>)
}