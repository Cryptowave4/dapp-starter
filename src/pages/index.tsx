'use client'
import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'
import ConnectWallet from '@/components/ConnectWallet'
import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Navigation from '@/components/Navigation/Navigation'
import Footer from '@/components/Footer/Footer'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
const Home: FC = () => {
	return (
		<div className="relative flex justify-center min-h-screen py-4 bg-gray-100 items-top dark:bg-gray-900 sm:items-center sm:pt-0">
			<div className="absolute top-6 right-6">
				<ConnectWallet />
			</div>
			<ThemeSwitcher className="absolute bottom-6 right-6" />
			<div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
				<div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
					<h1 className="text-6xl font-bold dark:text-white">{APP_NAME}</h1>
				</div>
				<Navigation />
				<h1 className="mb-4 text-4xl font-bold">
					Welcome to EtherSlots, the virtual casino built on the blockchain!
				</h1>
				<p className="mb-8 text-lg">
					At EtherSlots, we pride ourselves on our commitment to player privacy and security. Our platform
					utilizes the latest encryption and smart contract technology to ensure that all transactions are
					secure and transparent. We also believe in promoting responsible gambling and have implemented
					measures to prevent problem gambling on our platform.
				</p>
				<p className="mb-8 text-lg">
					We are dedicated to providing a high-quality gaming experience that is both fun and fair.
				</p>
				<p className="mb-8 text-lg">
					Thank you for choosing EtherSlots as your go-to virtual casino. We look forward to providing you
					with a top-notch gaming experience that you won't find anywhere else!
				</p>
				<div className="flex gap-4 cta-buttons ">
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
		</div>
	)
}

export default Home
