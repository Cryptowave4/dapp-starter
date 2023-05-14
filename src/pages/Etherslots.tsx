'use client'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from '@/styles/etherslotsgame/EtherslotsGame.module.css'
import EtherslotsGame from '@/components/Etherslots/Eslotsgame'

function Etherslots() {
	const [isOpen, setIsOpen] = useState(false)
	const router = useRouter()

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={styles.EtherslotsGame}>
			<h1>Welcome to the Etherslots game!</h1>
			<EtherslotsGame />
		</div>
	)
}

export default Etherslots
