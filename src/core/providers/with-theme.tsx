import 'core/styles/index.scss'

import { Toaster } from 'shared/ui/toaster'

import { ThemeProvider } from 'next-themes'

const themes = ['light', 'dark', 'system', 'green']

export const WithTheme = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider attribute={'class'} defaultTheme={'system'} enableSystem themes={themes}>
			{children}
			<Toaster />
		</ThemeProvider>
	)
}
