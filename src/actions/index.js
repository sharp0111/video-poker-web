export const START_GAME = 'START_GAME';
export const TOGGLE_CARD_STATE = 'TOGGLE_CARD_STATE';
export const DRAW_CARD = 'DRAW_CARD';
export const CALCULATE_CREDIT = 'CALCULATE_CREDIT';

export const startGame = () => ({
	type: START_GAME,
});

export const toggleCardState = (cardIdx) => ({
	type: TOGGLE_CARD_STATE,
	cardIdx
});

export const drawCard = (cardIdx) => ({
	type: DRAW_CARD,
	cardIdx
});

export const calculateCredit =  () => ({
	type: CALCULATE_CREDIT,
});