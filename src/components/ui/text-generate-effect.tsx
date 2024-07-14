'use client'
import { motion, stagger, useAnimate } from 'framer-motion'
import { type ComponentProps, useEffect } from 'react'

import { cn } from '@/lib/cn'

type TextGenerateEffectProps = ComponentProps<'div'> & {
	words: string
}

export function TextGenerateEffect({ words, className, ...props }: TextGenerateEffectProps) {
	const [scope, animate] = useAnimate()
	let wordsArray = words.split(' ')

	useEffect(() => {
		animate(
			'span',
			{
				opacity: 1,
			},
			{
				duration: 2,
				delay: stagger(0.2),
			},
		)
	}, [animate])

	const renderWords = () => {
		return (
			<motion.div ref={scope}>
				{wordsArray.map((word, idx) => {
					return (
						<motion.span
							key={word + idx}
							className={cn('text-zinc-200 opacity-0', idx > 3 && 'text-purple')}
						>
							{word}{' '}
						</motion.span>
					)
				})}
			</motion.div>
		)
	}

	return (
		<div className={cn('font-bold', className)} {...props}>
			<div className="my-4">
				<div className="leading-snug tracking-wide text-black dark:text-white">{renderWords()}</div>
			</div>
		</div>
	)
}
