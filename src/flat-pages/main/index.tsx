import { About } from 'flat-pages/main/ui/about'
import { Info } from 'flat-pages/main/ui/info'

export const MainPage = ({}) => {
	return (
		<div className={'col pt-32 gap-24'}>
			<About />
			<Info />
		</div>
	)
}
