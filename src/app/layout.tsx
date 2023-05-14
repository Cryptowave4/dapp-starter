
import styles from '@/styles/styles.module.css'
import Footer from '@/components/Footer/Footer'
import Navigation from '@/components/Navigation/Navigation'
import { Providers } from './providers'

export const metadata = {
	title: 'Etherslots Dapp',
	description: 'Etherslots Arbitrum casino dapp',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Providers />
				<Navigation />
				{children}
				<Footer />
				<Providers />
			</body>
		</html>

		



				// app/layout.tsx
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
