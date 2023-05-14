'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation/Navigation'
import styles from '../styles/styles.module.css'
import Web3 from 'web3'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Footer from '@/components/Footer/Footer'
import { useRouter } from 'next/router'

function Home() {
	const [provider, setProvider] = useState(null)
	const [account, setAccount] = useState(null)

	useEffect(() => {
		const web3Modal = new Web3Modal({
			network: 'mainnet',
			cacheProvider: true,
			providerOptions: {
				walletconnect: {
					package: WalletConnectProvider,
					options: {
						infuraId: 'INFURA_PROJECT_ID',
					},
				},
			},
		})

		if (web3Modal.cachedProvider) {
			connectWallet()
		}

		async function connectWallet() {
			const provider = await web3Modal.connect()
			const web3 = new Web3(provider)
			const accounts = await web3.eth.getAccounts()
			setProvider(provider)
			setAccount(accounts[0])

			provider.on('accountsChanged', accounts => {
				setAccount(accounts[0])
			})

			provider.on('chainChanged', () => {
				window.location.reload()
			})

			provider.on('disconnect', () => {
				setAccount(null)
				setProvider(null)
			})
		}

		window.connectWallet = connectWallet
	}, [])

	return (
		<div className="flex flex-col items-center justify-center min-h-screen text-center home">
			<div className="connectWallet">
				<button onClick={() => window.connectWallet()}>
					{account ? `Wallet Connected: ${account}` : 'Connect to Wallet'}
				</button>
			</div>
			<Navigation />
			<h1 className="mb-4 text-4xl font-bold">
				Welcome to EtherSlots, the virtual casino built on the blockchain!
			</h1>
			<p className="mb-8 text-lg">
				At EtherSlots, we pride ourselves on our commitment to player privacy and security. Our platform
				utilizes the latest encryption and smart contract technology to ensure that all transactions are secure
				and transparent. We also believe in promoting responsible gambling and have implemented measures to
				prevent problem gambling on our platform.
			</p>
			<p className="mb-8 text-lg">
				We are dedicated to providing a high-quality gaming experience that is both fun and fair.
			</p>
			<p className="mb-8 text-lg">
				Thank you for choosing EtherSlots as your go-to virtual casino. We look forward to providing you with a
				top-notch gaming experience that you won't find anywhere else!
			</p>
			<div className="flex gap-4 cta-buttons">
				<Link
					href="/src/pages/Etherslots.tsx"
					className="px-4 py-2 text-white bg-blue-500 rounded cta-button hover:bg-blue-600"
				>
					Play Etherslotsgame
				</Link>
				<Link
					href="/src/pages/Luckyjack.tsx"
					className="px-4 py-2 text-white bg-blue-500 rounded cta-button hover:bg-blue-600"
				>
					Play Luckyjack
				</Link>
				<Link
					href="/src/pages/Lucky8.tsx"
					className="px-4 py-2 text-white bg-blue-500 rounded cta-button hover:bg-blue-600"
				>
					Play Lucky8
				</Link>
				<Link
					href="/src/pages/Staking.tsx"
					className="px-4 py-2 text-white bg-blue-500 rounded cta-button hover:bg-blue-600"
				>
					Stakingpool
				</Link>
			</div>
		</div>
	)
}

export default Home
