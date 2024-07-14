export function Grid() {
	return (
		<div className="absolute inset-5 flex h-full w-full items-center justify-center bg-black-100 bg-grid-white/[0.03]">
			{/* Radial gradient for the container to give a faded look */}
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#000319)]" />
		</div>
	)
}
