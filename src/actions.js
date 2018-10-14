import Deck from './helpers/Deck';

// action types
export const DEAL_CARDS = 'DEAL_CARDS';
export const DRAW_CARDS = 'DRAW_CARDS';
export const TOGGLE_CARD = 'TOGGLE_CARD';
export const CALC_POINTS = 'CALC_POINTS';

// action creators
let nextCard;
export function deal(cards) {
    return { 
        type: DEAL_CARDS,
        id: nextCard++,
        cards
    }
}

export function draw(cards) {
    return { 
        type: DRAW_CARDS, 
        id: nextCard++,
        cards 
    }
}

export function toggleCard(id) {
    return { 
        type: TOGGLE_CARD, 
        id 
    }
}

export function calcPoints(points) {
    return { 
        type: TOGGLE_CARD, 
        points 
    }
}
