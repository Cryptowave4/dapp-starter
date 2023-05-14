'use client'
import { useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import React from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Nav.module.css'
import EtherslotsGamePage from '../../pages/Etherslots'
import Lucky8 from '../../pages/Lucky8'
import Staking from '@/pages/Staking'
import Home from '@/pages/index'
const Navigation: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<nav>
			<div className="menu-btn" onClick={toggleMenu}>
				<div className={`line line--1 ${isOpen ? 'line-cross' : ''}`}></div>
				<div className={`line line--2 ${isOpen ? 'line-fade-out' : ''}`}></div>
				<div className={`line line--3 ${isOpen ? 'line-cross' : ''}`}></div>
			</div>

			<div className={`nav-links ${isOpen ? 'fade-in' : ''}`}>
				<Link href="/">
					<a className="link">Home</a>
				</Link>

				<Link href="/etherslots">
					<a className="link">Etherslots</a>
				</Link>

				<Link href="/luckyjack">
					<a className="link">Luckyjack</a>
				</Link>

				<Link href="/lucky8">
					<a className="link">Lucky8</a>
				</Link>

				<Link href="/stakingpool">
					<a className="link">Stakingpool</a>
				</Link>
			</div>
		</nav>
	)
}

export default Navigation
