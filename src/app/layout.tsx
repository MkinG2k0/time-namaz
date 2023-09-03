import { WithLayout, WithTheme } from 'core'

export const metadata = {
	description: 'Generated by Next.js',
	icons: ['favicon.ico'],
	title: 'MK',
}

function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang={'en'}>
			<body>
				<WithTheme>
					<WithLayout>{children}</WithLayout>
				</WithTheme>
			</body>
		</html>
	)
}

export default RootLayout
