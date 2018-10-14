class Deck {
	constructor() {
		this.deck = []
		this.dealt_cards = []
	}

	// generates a deck of cards
	generate_deck () {

		// creates card object
		let card = (suit, value) => {
			this.name = value + ' of ' + suit
			this.suit = suit
			this.value = value

			return {name:this.name, suit:this.suit, value:this.value}
		}

		let values = ['2', '3','4','5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
		let suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts']

		for ( let s = 0; s < suits.length; s++ ) {
		        for ( let v = 0; v < values.length; v++ ) {
               			this.deck.push(card(suits[s], values[v]))
        		}
		}
	}

	// prints the deck of card objects
	print_deck () {
		if (this.deck.length === 0) {
			console.log('Deck has not been generated. Call generate_deck() on deck object before continuing.')
		}
		else {
			for ( let c = 0; c < this.deck.length; c++ ) {
	       			console.log(this.deck[c])
			}
		}
	}

	// shuffle the deck
	shuffle () {
  		let currentIndex = this.deck.length, temp_val, rand_ind;

  		while (0 !== currentIndex) {
  		  rand_ind = Math.floor(Math.random() * currentIndex);
  		  currentIndex -= 1;
  		  temp_val = this.deck[currentIndex];
  		  this.deck[currentIndex] = this.deck[rand_ind];
  		  this.deck[rand_ind] = temp_val;
  		}
	}

	// deal a number cards
	deal (num_cards) {

                let cards = []

                for ( let c = 0; c < num_cards; c++ ) {
                        let dealt_card = this.deck.shift()
                        cards.push(dealt_card)
                        this.dealt_cards.push(dealt_card)
                }

                return cards
        }

	replace () {
		this.deck.unshift(this.dealt_cards.shift())
	}

	clear_deck () {
		this.deck = []
	}
}

export default Deck;