// deal n number of cards
const deal = (n, currDeck, currHand) => {
	if (n) {
		for ( let i = 0; i < n; i++ ) {
			let dealt_card = currDeck.shift();
			currHand.push(dealt_card);
		}
	} else {
		for (let i=0; i < currHand.length; i++) {
			if (currHand[i].held === false) {
				currHand[i] = currDeck.shift();
			}
		}
	}
	return currHand;
}

export default deal;