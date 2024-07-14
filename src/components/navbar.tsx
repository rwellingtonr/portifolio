import { FolderCode, Info, Send } from 'lucide-react'
import Link from 'next/link'

import { FloatingNav } from './ui'

const navItems = [
	{
		Icon: Info,
		name: 'About',
		link: '#about',
	},
	{
		Icon: FolderCode,
		name: 'projects',
		link: '#projects',
	},
	{
		Icon: Send,
		name: 'Contact',
		link: '#contact',
	},
]

export function Navbar() {
	return (
		<FloatingNav>
			{navItems.map(({ Icon, link, name }) => (
				<Link
					key={`link=${name}`}
					href={link}
					aria-label={`navigate to ${name}`}
					className="flex items-center justify-center gap-1 space-x-1 text-zinc-400 hover:text-zinc-300"
					title={name}
				>
					<Icon className="size-6 md:size-4" />
					<span className="hidden text-sm sm:block">{name}</span>
				</Link>
			))}
		</FloatingNav>
	)
}
