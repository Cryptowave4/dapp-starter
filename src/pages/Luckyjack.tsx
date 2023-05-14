'use client'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from '@/styles/Luckyjack.module.css'
import Luckyjack from '@/components/Luckyjack/Luckyjack'
import { FC } from 'react'

const Luckyjack: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const router = useRouter()

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={styles.Lucky8}>
			<h1>Welcome to the Luckyjack game!</h1>
			<Luckyjack />
		</div>
	)
}
export default Luckyjack
