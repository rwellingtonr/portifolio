'use client'
import * as Icons from './icons'
import { DirectionAwareHover } from './ui'

export function About() {
	return (
		<section
			id="about"
			className="relative flex h-screen flex-col justify-center gap-8 md:justify-start md:pt-8"
		>
			<div className="grid grid-cols-1 justify-center gap-6 md:grid-cols-3">
				<DirectionAwareHover.Root className="hidden aspect-square md:block md:max-w-2xl">
					<DirectionAwareHover.Image
						loading="lazy"
						width={1000}
						height={1500}
						src={'/me.webp'}
						alt="Wellington in the snow"
						className=""
						quality={80}
					/>
					<DirectionAwareHover.Content>
						<p className="text-xl font-bold text-zinc-200">Wellington Leardini</p>
						<p className="text-sm font-normal text-zinc-200">Front-end Engineer</p>
					</DirectionAwareHover.Content>
				</DirectionAwareHover.Root>

				<article className="col-span-1 space-y-10 text-zinc-200 md:col-span-2">
					<h2 className="text-center text-[2.5rem] font-bold md:text-left md:text-2xl lg:text-4xl">
						About me
					</h2>

					<p className="text-base">
						Exercitation ex incididunt ut excepteur eiusmod ea ex ex. Ut ad dolor mollit non
						consequat labore est veniam consequat ad. Irure pariatur commodo anim anim. Esse
						deserunt aute in esse fugiat cupidatat aliquip incididunt Lorem eiusmod aute sit amet.
						Reprehenderit aliquip ut ad deserunt irure quis occaecat incididunt irure consequat enim
						ad ut laborum. Lorem fugiat id ex.
					</p>
				</article>
			</div>
			<article className="col-span-3">
				<h3 className="text-center text-[2.5rem] font-semibold text-zinc-200 md:text-left md:text-xl lg:text-2xl">
					Technologies
				</h3>

				<div
					style={
						{
							'--animation-duration': '20s',
							'--animation-direction': 'forwards',
						} as React.CSSProperties
					}
					className="min-w-[min(1200px,90vw)] overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_20%,#000_80%,transparent)]"
				>
					<ul className="group flex w-max min-w-full shrink-0 animate-scroll flex-nowrap gap-4 py-4 hover:[animation-play-state:paused]">
						{Object.keys(Icons).map((key) => {
							const Icon = Icons[key as keyof typeof Icons]
							return (
								<li
									key={key}
									className={`relative size-16 max-w-full flex-shrink-0 rounded-2xl px-4 py-6 md:size-20 group-hover:[&:not(:has(:hover))]:grayscale`}
								>
									<Icon
										className={`size-10 md:size-16 ${key === 'Prisma' && 'rounded bg-zinc-200 hover:bg-violet-200'}`}
									/>
									<span className="sr-only">{key}</span>
								</li>
							)
						})}
						<li></li>
					</ul>
				</div>
			</article>
		</section>
	)
}
