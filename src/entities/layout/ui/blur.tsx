import { CSSProperties } from 'react'

import Image from 'next/image'

export const Blur = () => {
	return (
		<div className={'absolute w-[100vw] h-[100vh] overflow-x-hidden  pointer-events-none'}>
			<img
				className={'animation left-[-25vw] top-0 absolute scale-150'}
				src={'/images/Ellipse3.svg '}
				style={{ '--move-direction-x': '80%', '--move-duration': '45s' } as CSSProperties}
			/>
			<img
				className={'animation left-[25vw] top-0 absolute scale-150'}
				src={'/images/Ellipse4.svg '}
				style={{ '--move-direction-x': '-50%', '--move-duration': '38s' } as CSSProperties}
			/>
			<img
				className={'animation left-[50vw]  top-0 absolute  scale-150'}
				src={'/images/Ellipse5.svg '}
				style={{ '--move-direction-x': '30%', '--move-duration': '68s' } as CSSProperties}
			/>
		</div>
	)
}
