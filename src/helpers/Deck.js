
// generates a deck of cards
export const generateNewDeck = () => {
	const deck = [];

	// creates card object
	let card = (suit, rank) => {
		return {
			rank: rank,
			suit: suit,
			held: true
		}
	}
	
	const ranks = ['10', '2', '3','4','5', '6', '7', '8', '9', 'A', 'J', 'K', 'Q'];
	const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
	
	for ( let i = 0; i < suits.length; i++ ) {
			for ( let j = 0; j < ranks.length; j++ ) {
					deck.push(card(ranks[j], suits[i]));
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

