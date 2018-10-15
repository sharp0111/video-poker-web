export const START_GAME = 'START_GAME';
export const TOGGLE_CARD_STATE = 'TOGGLE_CARD_STATE';
export const CALCULATE_CREDIT = 'CALCULATE_CREDIT';

export const startGame = () => ({
	type: START_GAME,
});

export const toggleCardState = (cardIndex, cardState) => ({
	type: TOGGLE_CARD_STATE,
	cardIndex, 
	cardState,
});

export const calculateCredit =  () => ({
	type: CALCULATE_CREDIT,
});