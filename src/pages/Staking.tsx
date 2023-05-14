'use client'
import { useClient } from 'wagmi'
import EtherSlotsStaking from '../components/Staking/Stakingpool'
import styles from './Stakingpool.module.css'
function Staking() {
	return (
		<div className={styles.Lucky8}>
			<h1>Welcome to the Lucky8 game!</h1>
			<EtherSlotsStaking />
			{/* Add any other components or elements you need for your game page */}
		</div>
	)
}

export default Staking
