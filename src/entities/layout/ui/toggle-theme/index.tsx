'use client'

import { useEffect, useState } from 'react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from 'shared/ui/dropdown-menu'
import { Button } from 'shared/ui/button'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ModeToggle() {
	const { setTheme, theme, themes } = useTheme()
	const isDark = theme === 'dark'
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size={'icon'} variant={'ghost'}>
					<Moon className={`h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0 ${isDark ? 'hidden' : ''}`} />
					<Sun className={`h-[1.2rem] w-[1.2rem] rotate-0 transition-all dark:-rotate-90 ${isDark ? '' : 'hidden'}`} />
					<span className={'sr-only'}>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align={'end'}>
				<DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('green')}>Green</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
