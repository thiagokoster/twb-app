"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icons } from "../icons";

const slides = [
	{
		id: 1,
		image: "/carousel/1.png",
		content: (
		      <div className="flex flex-col px-24 py-70">
					<div className="flex flex-col gap-8">
						<div className="text-[64px]">
							Educação que liberta,<br/>
							e <span className="text-twb-green">transforma vidas</span>
						</div>
						<button className="bg-twb-primary w-fit px-4 py-4 rounded-md flex gap-1">Como Ajudar<Icons.whatsaap /></button>
					</div>
			  </div>
		)
	},
	{
		id: 2,
		image: "/carousel/2.png",
		content: (
		      <div className="flex flex-col px-24 py-42">
					<div className="flex flex-col gap-8">
						<div className="text-[64px]">
							Mudamos pessoas,<br/>
							<span className="text-twb-green">transformamos</span> o mundo
						</div>
						<button className="bg-twb-primary w-fit px-4 py-4 rounded-md flex gap-1">Como Ajudar<Icons.whatsaap /></button>
					</div>
			  </div>

		)
	},
	{
		id: 3,
		image: "/carousel/3.png",
		content: (
		      <div className="flex flex-col px-24 py-42">
					<div className="flex flex-col gap-8">
						<div className="text-[64px]">
							Educação sem fronteiras,<br/>
							<span className="text-twb-green">transformação</span> sem limite
						</div>
						<button className="bg-twb-primary w-fit px-4 py-4 rounded-md flex gap-1">Como Ajudar<Icons.whatsaap /></button>
					</div>
			  </div>

		)
	},

];

export const Carousel = () => {
	const [current, setCurrent] = useState(0);

	// Autoplay every 5 seconds
	const timeout = 5000; 
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % slides.length);
		}, timeout)
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative w-full overflow-hidden">
			{/* Slide container */}
			<div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
				{slides.map((slide) => (
					<div key={slide.id} className="relative w-full flex-shrink-0 h-220">
						{/* Background Image */}
						<Image src={slide.image}
							alt={`Slide ${slide.id}`}
							fill
							className="z-0 w-max"
							/>
						{/* Slide content */}
						<div className="absolute inset-0 z-10">
							{slide.content}
						</div>
					</div>
				))}
			</div>

			{/* Dot indicators */}
			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
				{slides.map((_, idx) => (
					<button
						key={idx}
						onClick={() => setCurrent(idx)}
						className={`h-3 w-3 rounded-full border-1 ${idx === current ? "bg-white border-none" : "border-twb-grey bg-transparent"} transition-colors duration-300`}
					/>
				))}
			</div>
		</div>
	);
}
