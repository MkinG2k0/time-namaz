import { Button } from 'shared/ui/button'

import Image from 'next/image'

export const About = () => {
	return (
		<div className={'col gap-5 items-center text-2xl '}>
			<div className={'row gap-5 text-2xl flex-wrap w-full'}>
				<div className={'col gap-6   max-w-2xl'}>
					<span className={'flex gap-4 text-6xl font-max flex-wrap'}>
						<span className={'text-[#808080]'}>I`m</span>
						<span>Mutalimov Kamal</span>
					</span>
					<p className={'text-[#808080] font-bold '}>
						A front-end engineer and UI/UX designer helping startups turn their visions into a digital reality. I
						specialize in designing and building modern mobile and web-based apps.
					</p>
				</div>
				<div
					className={
						'text-[12rem] flex-shrink-0 w-48 h-48 rounded-full flex items-center justify-center relative flex-auto max-lg:hidden'
					}
				>
					<div className={'w-36 h-36 rounded-full shadow-emoji absolute '}></div>
					{/*🥸*/}
					<Image alt={'mk'} className={''} height={200} src={'/images/my.png'} width={200} />
				</div>
			</div>
			<div className={'row gap-5 w-full'}>
				<Button className={'text-2xl'} variant={'shadow'}>
					See my resume
				</Button>
			</div>
		</div>
	)
}
// animate-bounce
