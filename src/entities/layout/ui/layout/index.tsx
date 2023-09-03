import { Header } from 'entities/layout/ui/header'
import { Blur } from 'entities/layout/ui/blur'

export const Layout: FC = ({ children }) => {
	return (
		<div className={'h-[100vh] col bg-background text-text overflow-x-auto'}>
			<Blur />
			<div className={'absolute w-[100vw] h-[100vh] overflow-x-auto z-10'}>
				<div className={'col flex-auto scroll mx-auto w-[clamp(10rem,100%,1000px)]'}>
					<Header />
					<div className={'flex-auto p-4 pb-24'}>{children}</div>
					{/*<Footer />*/}
				</div>
			</div>
		</div>
	)
}
