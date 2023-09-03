import { ModeToggle } from 'entities/layout/ui/toggle-theme'

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from 'shared/ui/navigation-menu'
import { NAV } from 'shared/constant/nav'
import { Button } from 'shared/ui/button'

import Link from 'next/link'

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
	return (
		<div
			className={
				'row justify-between items-center px-4 py-2 mt-14 mx-4 text-accent-foreground bg-[rgba(24,24,29,0.3)] rounded  '
			}
		>
			<Menu />
			<div className={'row gap-3 items-center'}>
				<RightMenu />
				<div className={'w-[1px] h-8 bg-white rounded '}></div>
				<ModeToggle />
			</div>
		</div>
	)
}
const RightMenu = () => {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<Link href={NAV.MAIN} legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							<img className={''} src={'/images/Github.svg'} />
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}
const Menu = () => {
	return (
		<NavigationMenu className={'max-sm:hidden'}>
			<span className={'font-bold text-xl mr-6'}>MK</span>
			<NavigationMenuList>
				<NavigationMenuItem>
					<Link href={NAV.MAIN} legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href={NAV.MAIN} legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>Work</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href={NAV.MAIN} legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>Notebook</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href={NAV.MAIN} legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				{/*<NavigationMenuItem>*/}
				{/*	<Link href={NAV.MAIN} legacyBehavior passHref>*/}
				{/*		<NavigationMenuLink className={navigationMenuTriggerStyle()}>More</NavigationMenuLink>*/}
				{/*	</Link>*/}
				{/*</NavigationMenuItem>*/}
			</NavigationMenuList>
		</NavigationMenu>
	)
}
