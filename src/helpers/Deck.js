
// generates a deck of cards
export const generateNewDeck = () => {
	const deck = [];

	// creates card object
	let card = (suit, rank) => {
		return {
			suit: suit,
			rank: rank
		}
	}

	const ranks = ['2', '3','4','5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
	const suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts'];
	
	for ( let i = 0; i < suits.length; i++ ) {
			for ( let j = 0; j < ranks.length; j++ ) {
					deck.push(card(suits[i], ranks[j]));
			}
	}
	return deck;
}

// shuffle the deck
export const shuffle = (currDeck) => {
	let currIdx = currDeck.length, temp, randIdx;

	while (0 !== currIdx) {
		randIdx = Math.floor(Math.random() * currIdx);
		currIdx -= 1;
		temp = currDeck[currIdx];
		currDeck[currIdx] = currDeck[randIdx];
		currDeck[randIdx] = temp;
	}
	return currDeck;
}
// deal n number of cards
export const deal = (n, currDeck, currHand) => {
	for ( let i = 0; i < n; i++ ) {
		let dealt_card = currDeck.shift();
		currHand.push(dealt_card);
	}
	return currHand;
}

// Draw/Replace n number of cards
export const draw = (currDeck, currHand, cardIdxToReplace) => {
	let i = 0;
	while (i < currHand.length) {
		currHand[cardIdxToReplace] = currDeck.shift();
		i++;
	}
	return currHand;
}
