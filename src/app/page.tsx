import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { Projects } from '@/components/projects'

export default function Home() {
	return (
		<main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 antialiased sm:px-10">
			<div className="w-full max-w-7xl">
				<Navbar />
				<Hero />
				<About />
				<Projects />
				<Contact />
			</div>
		</main>
	)
}
