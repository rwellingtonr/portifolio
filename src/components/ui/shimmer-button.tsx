import { Slot } from '@radix-ui/react-slot'
import { type ComponentProps, forwardRef } from 'react'

import { cn } from '@/lib/cn'

type ShimmerButtonProps = ComponentProps<'button'> & {
	asChild?: boolean
}

export const ShimmerButton = forwardRef<HTMLButtonElement, ShimmerButtonProps>(
	({ className, asChild = false, ...props }, forwardRef) => {
		const Component = asChild ? Slot : 'button'

		return (
			<Component
				ref={forwardRef}
				className={cn(
					'inline-flex h-12 w-64 animate-shimmer items-center justify-center gap-2 rounded-lg border-2 border-slate-700 bg-[linear-gradient(110deg,#000319,45%,#1e2631,55%,#000319)] bg-[length:200%_100%] px-7 font-medium text-slate-400 transition-colors md:mt-10 md:w-60',
					className,
				)}
				{...props}
			/>
		)
	},
)

ShimmerButton.displayName = 'ShimmerButton'
