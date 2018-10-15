import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    list-style-type: none;
    width: 80%;
    margin: auto;
`

const ListItem = styled.li``

const Header = () => {
    return(
        <div>
            <h1>Video Poker</h1>
            <h2>Winning Strategies</h2>
            <List>
                <ListItem>Straight (500 points): Five cards of consecutive rank. Example: 9:spades: 10:spades: J:diamonds: Q:hearts: K:diamonds:</ListItem>
                <ListItem>Pair (100 points): Two cards of the same rank. Example: 5:clubs: 5:diamonds:</ListItem>
            </List>
        </div>
    );
}

export default Header;