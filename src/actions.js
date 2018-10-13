// action types

export const DEAL = 'DEAL';
export const DRAW = 'DRAW';
export const HELD_CARD = 'HELD_CARD'

// action creators
export function deal(cards) {
    return { type: DEAL, cards }
}

export function draw(cards) {
    return { type: DRAW, cards }
}

export function heldCard(cards) {
    return { type: HELD_CARD, cards }
}