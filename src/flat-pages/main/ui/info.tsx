import Image from 'next/image'

export const Info = () => {
	return (
		<div className={'col gap-8'}>
			<span className={'text-5xl font-bold'}>Get to know me</span>
			<div className={'row gap-8 flex-wrap'}>
				<Card description={'Who I am and what I do'} src={'/images/my.png'} titile={'About me'} />
				<Card
					// classNameImage={'shadow-image '}
					description={'My thoughts, insights, and reflections'}
					isShadow
					src={'/images/Tech Stack.png'}
					titile={'Tech Stack'}
				/>
			</div>
			<div className={'row gap-8 flex-wrap'}>
				{/*<Card description={'description'} src={'/images/my.png'} titile={'titile'} />*/}
				<Card description={'My thoughts, insights, and reflections'} src={'/images/Notebook.png'} titile={'Notebook'} />
			</div>
		</div>
	)
}

const Card = ({
	description,
	isShadow = false,
	src,
	titile,
}: {
	description: string
	isShadow?: boolean
	src: string
	titile: string
}) => {
	return (
		<div
			className={
				'col gap-4 items-center flex-auto min-w-[22rem] pt-10 bg-gray-200  rounded-3xl bg-primary overflow-hidden'
			}
		>
			<span className={'text-4xl font-bold'}>{titile}</span>
			<span className={'text-xl text-muted'}>{description}</span>
			<div className={'flex-auto relative col justify-end'}>
				{isShadow && <div className={'shadow-image absolute w-full h-full'}></div>}
				<Image alt={'mk'} className={'object-cover '} height={300} src={src} width={300} />
			</div>
		</div>
	)
}
