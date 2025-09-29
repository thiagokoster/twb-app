"use client"

export const Marquee = () => {
	const Item = () => (
		<div className="ml-6 flex gap-6 items-center">
			<svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" fill="none" viewBox="0 0 39 38">
				<path fill="var(--color-twb-green)" d="M19.411 5.579c2.505-4.098 11.61-9.561 17.756 0 2.05 2.732 4.098 10.654-4.097 20.488-5.463 5.463-7.74 6.829-8.195 6.829 0 1.407.49 3.821 2.225 4.593.696.176 1.277.255 1.705.212-.67.086-1.233-.003-1.705-.212-4.144-1.048-12.362-5.523-16.567-8.008C5.298 25.611-4.49 15.823 2.338 5.58c7.512-7.512 14.57-2.732 17.073 0Z"/>
			</svg>
			<p className="font-trash text-3xl text-black uppercase">Seja voluntário</p>

		</div>
	);
	return (
		<div className="bg-twb-green-light overflow-hidden">
			<div className="flex w-max animate-marquee h-[90px]">
				{/* Duplicate the sequence twice so loop has no gap */}
				{Array.from({ length: 12 }).map((_, i) => (
					<Item key={`a-${i}`} />
				))}
				{Array.from({ length: 12 }).map((_, i) => (
					<Item key={`b-${i}`} />
				))}
				<style jsx>{`
@keyframes marquee {
0% {
transform: translateX(-50%);
}
100% {
transform: translateX(0);
}
}
.animate-marquee {
animation: marquee 50s linear infinite;
}
`}</style>
			</div>
		</div>
	);
}
