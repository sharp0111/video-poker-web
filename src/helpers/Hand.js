//Get a New or Update the Hand
export default function updateHand(currentHand, currentDeck) {
	for (let i=0; i < currentHand.length; i++) {
		if (currentHand[i].cardState === 'NOT_HELD') {
			currentHand[i] = currentDeck.draw();
		}
	}
	return currentHand;
}