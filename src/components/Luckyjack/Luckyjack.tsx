import React, { useState } from 'react'
import EightDeck from '@/components/Luckyjack/EightDeck.jsx'
import Card from '@/components/Luckyjack/Card.jsx'
import styles from '@/styles/Luckyjack.module.css'

function Blackjack() {
	const [playerHand, setPlayerHand] = useState([])
	const [dealerHand, setDealerHand] = useState([])
	const [deck, setDeck] = useState(new EightDeck())
	const [gameOverMessage, setGameOverMessage] = useState('')

	function handleDeal() {
		setPlayerHand([])
		setDealerHand([])
		setGameOverMessage('')
	}

	function calculateHandValue(hand) {
		let value = 0
		let aces = 0

		hand.forEach(card => {
			if (card.value === 'A') {
				aces += 1
			} else if (card.value === 'K' || card.value === 'Q' || card.value === 'J') {
				value += 10
			} else {
				value += parseInt(card.value, 10)
			}
		})

		for (let i = 0; i < aces; i++) {
			if (value + 11 <= 21) {
				value += 11
			} else {
				value += 1
			}
		}

		return value
	}

	function handleHit() {
		const newCard = deck.drawCard()
		setPlayerHand([...playerHand, newCard])

		const playerHandValue = calculateHandValue(playerHand)

		if (playerHandValue > 21) {
			setGameOverMessage('Dealer wins!')
		}
	}

	function handleStand() {
		let newDealerHand = [...dealerHand]

		while (calculateHandValue(newDealerHand) < 17) {
			const newCard = deck.drawCard()
			newDealerHand = [...newDealerHand, newCard]
		}

		setDealerHand(newDealerHand)

		const playerHandValue = calculateHandValue(playerHand)
		const dealerHandValue = calculateHandValue(newDealerHand)

		let message = ''

		if (playerHandValue > 21) {
			message = 'Dealer wins!'
		} else if (dealerHandValue > 21) {
			message = 'Player wins!'
		} else if (playerHandValue > dealerHandValue) {
			message = 'Player wins!'
		} else if (playerHandValue < dealerHandValue) {
			message = 'Dealer wins!'
		} else {
			message = 'Push!'
		}

		setGameOverMessage(message)
	}

	return (
		<div className="blackjack">
			<div className="table">
				<div className="player-hand">
					{playerHand.map((card, index) => (
						<Card card={card} key={index} />
					))}
				</div>
				<div className="dealer-hand">
					{dealerHand.map((card, index) => (
						<Card card={card} key={index} />
					))}
				</div>
				<button onClick={handleDeal}>Deal</button>
				<button onClick={handleHit}>Hit</button>
				<button onClick={handleStand}>Stand</button>
				<div className="game-over-message">{gameOverMessage}</div>
			</div>
		</div>
	)
}

export default Blackjack
