import { useState, useEffect } from 'react'

function createEightDeck() {
	const suits = ['hearts', 'diamonds', 'clubs', 'spades']
	const values = [
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'jack',
		'queen',
		'king',
		'ace',
	]
	const numOfDecks = 8
	const cards = []

	function initialize() {
		for (let d = 0; d < numOfDecks; d++) {
			for (let i = 0; i < suits.length; i++) {
				for (let j = 0; j < values.length; j++) {
					cards.push({ suit: suits[i], value: values[j] })
				}
			}
		}
	}

	function shuffle() {
		for (let i = cards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[cards[i], cards[j]] = [cards[j], cards[i]]
		}
	}

	function drawCard() {
		return cards.pop()
	}

	function cardsLeft() {
		return cards.length
	}

	initialize()

	const [eightDeck, setEightDeck] = useState({ cards })

	useEffect(() => {
		setEightDeck({ cards })
	}, [cards])

	return {
		eightDeck,
		initialize,
		shuffle,
		drawCard,
		cardsLeft,
	}
}

function EightDeck() {
	const { eightDeck, initialize, shuffle, drawCard, cardsLeft } = createEightDeck()

	return null // Return your JSX here
}

export default EightDeck
