import { Grid, ShimmerButton, Spotlight, TextGenerateEffect } from './ui'

export function Hero() {
	return (
		<section id="hero" className="flex h-screen flex-col items-center justify-center">
			<>
				<Spotlight className="-left-10 -top-40 h-screen md:-left-32 md:-top-20" fill="white" />
				<Spotlight className="left-full top-10 h-[80vh] w-[50vw]" fill="purple" />
				<Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
			</>

			<Grid />

			<div className="relative">
				<article className="flex max-w-[89vw] flex-col items-center justify-center gap-4 md:max-w-2xl lg:max-w-[60vw]">
					<TextGenerateEffect
						words="Transforming Concepts into Seamless User Experiences"
						className="text-center text-[2.5rem] text-zinc-200 md:text-5xl lg:text-6xl"
					/>
					<p className="text-center text-sm text-zinc-400 md:text-lg md:tracking-wider lg:w-96 lg:text-sm">
						Hello there 👋, I&apos;m Wellington, a front-end engineer from Brazil. I&apos;m
						passionate about to create beautiful and functional user interfaces.
					</p>

					<ShimmerButton asChild>
						<a href="#about" aria-label="about me" className="mt-10">
							About me
						</a>
					</ShimmerButton>
				</article>
			</div>
		</section>
	)
}
