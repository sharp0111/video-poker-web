# Take-Home Exercise

Thank you for taking the time to interview at Sweetgreen. To get a better idea of how you architect and build software, we'd like to give you an opportunity to complete a short exercise.

## Specification

Build a simplified, browser version of [Video Poker](https://en.wikipedia.org/wiki/Video_poker).

1. The user may press the “Deal” button
2. A new, 52 card deck, is created and shuffled (the deck doesn’t need to be represented in the UI)
3. The top five cards from the deck are laid out horizontally on-screen
4. The user chooses whether to keep or discard each card by clicking an individual card to toggle between “keep” and “discard” states.
5. The user may press the “Go” button
6. Each discarded card is replaced with a card from the top of the deck
8. The value of the resulting hand is displayed and the “Deal” button replaces the “go” button. The user may click "Deal" to start the next game.


### Scoring table:

Each hand is scored by selecting the highest **and only the highest** condition from the following:

- Straight (500 points): Five cards of consecutive rank. Example: 9:spades: 10:spades: J:diamonds: Q:hearts: K:diamonds:
- Pair (100 points): Two cards of the same rank. Example: 5:clubs: 5:diamonds:
- No Value (0 points): None of the above conditions are met.

## Requirements and Recommendations:

- Use any tools or technologies you think are appropriate, but keep in mind that the purpose is to showcase your skills, and excessive use of framework boilerplate, sprawled over a multitude of files might not be an ideal presentation, and can also add time
- We're mainly looking for how you structure your logic, don't worry too much about presentation
- Please reach out if you have any questions

## Implementation

### Stack
[React](https://reactjs.org/)\
[Redux](https://redux.js.org/)

### Dependency manager
`yarn`\
`yarn install`
`yarn run start`\
`yarn add package_name`\
`yarn run test`

### Deployment
GitHub Pages from `gh-pages` branch at
[URL](https://sharp0111.github.io/video-poker-web/)

### Style Code
[standard](https://github.com/standard/standard#install)
