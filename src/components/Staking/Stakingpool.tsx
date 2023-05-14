import React, { useState, useEffect } from 'react'
import Web3 from 'web3' 
import { ethers} from 'ethers'  
function EtherSlotsStaking() {
	const [web3, setWeb3] = useState(null)
	const [accounts, setAccounts] = useState([])
	const [contract, setContract] = useState(null)

	const stakingOptions = [
		{ text: 'Stake 25% for 30 days', percentage: 25, duration: 30 },
		{ text: 'Stake 50% for 30 days', percentage: 50, duration: 30 },
		{ text: 'Stake 75% for 30 days', percentage: 75, duration: 30 },
		{ text: 'Stake 100% for 30 days', percentage: 100, duration: 30 },
		{ text: 'Stake 25% for 60 days', percentage: 25, duration: 60 },
		{ text: 'Stake 50% for 60 days', percentage: 50, duration: 60 },
		{ text: 'Stake 75% for 60 days', percentage: 75, duration: 60 },
		{ text: 'Stake 100% for 60 days', percentage: 100, duration: 60 },
	]

	const unstakingOptions = [
		{ text: 'Unstake 25%', percentage: 25 },
		{ text: 'Unstake 50%', percentage: 50 },
		{ text: 'Unstake 75%', percentage: 75 },
		{ text: 'Unstake 100%', percentage: 100 },
	]

	useEffect(() => {
		const enableEthereum = async () => {
			if (window.ethereum) {
				try {
					const web3Instance = new Web3(window.ethereum)
					setWeb3(web3Instance)
					await window.ethereum.enable()
					const accounts = await web3Instance.eth.getAccounts()
					setAccounts(accounts)

					const contractABI = [] /* contract ABI here */
					const contractAddress = '' /* contract address here*/
					const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress)
					setContract(contractInstance)
				} catch (error) {
					console.error('Error enabling Ethereum:', error)
				}
			} else {
				console.log('Ethereum provider not found')
			}
		}

		enableEthereum()
	}, [])

	const stake = async (percentage, duration) => {
		/* Add staking logic*/
		console.log('Staking Options:', stakingOptions)
	}

	const unstake = async percentage => {
		/* Add unstaking logic*/
		console.log('Unstaking Options:', unstakingOptions)
	}

	const claim = async () => {
		/* Add claim functionality*/
		console.log('Claiming tokens')
	}

	return (
		<div className="container">
			<h1>EtherSlots Staking</h1>
			<div className="staking-options">
				{stakingOptions.map((option, index) => (
					<button key={index} onClick={() => stake(option.percentage, option.duration)}>
						{option.text}
					</button>
				))}
				{unstakingOptions.map((option, index) => (
					<button key={index} onClick={() => unstake(option.percentage)}>
						{option.text}
					</button>
				))}
			</div>
			<div>
				<button className="claim-button" onClick={() => claim()}>
					Claim tokens
				</button>
			</div>
		</div>
	)
}

export default EtherSlotsStaking
return <div>EtherSlotsStaking</div>
