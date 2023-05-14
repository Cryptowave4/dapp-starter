'use client'
import React from 'react'
import BettingComponent from '@/components/Lucky8/BettingComponent'
import styles from '@/styles/Lucky8.module.css'
import RouletteWheel from '@/components/Lucky8/RouletteWheel'
import BettingTable from '@/components/Lucky8/BettingTable'
import BettingGrid from '@/components/Lucky8/BettingGrid'
import RouletteComponent from '@/components/Lucky8/RouletteComponent'

const Lucky8: React.FC = () => {
	return (
		<div className={styles.Lucky8}>
			<h1>Welcome to the Lucky8 game!</h1>
			<RouletteComponent />
			<BettingComponent />
			<BettingTable />
			<RouletteWheel />
			<BettingGrid />
			{/* Add any other components or elements you need for your game page */}
		</div>
	)
}

export default Lucky8
