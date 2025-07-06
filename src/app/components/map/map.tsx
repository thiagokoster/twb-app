"use client"

import { CountryPath } from "./countryPath";
import { Countries } from "./countries";
import { CountryPin } from "./countryPin";
import { useState } from "react";
import { Dialog, dialogShapes } from "./dialog";
import { CountryInfo } from "@/app/constants";


export const Map = () => {
	const [hoveredCountry, setHoveredCountry] = useState<string | null>();
	return (
		<div className="relative w-[902px] h-[569px]">
			<svg xmlns="http://www.w3.org/2000/svg" width="902" height="569" fill="none" viewBox="0 0 902 569">
				<g className="Map">
					{Object.entries(Countries).map(([code, { d }]) => (
						<CountryPath 
							key={code}
							code={code}
							d={d}
							onEnter={setHoveredCountry}
							onLeave={() => setHoveredCountry(null)}
						/>
					))}

					{Object.entries(CountryInfo).map(([code, { center }]) =>
						center ? <CountryPin key={code} x={center[0]} y={center[1]} /> : null
					)}
				</g>
			</svg>
			{hoveredCountry && CountryInfo[hoveredCountry] && (() => {
				console.log("show dialog")
				const { dialog, center, title, text } = CountryInfo[hoveredCountry];
				const shape = dialogShapes[dialog];
				const x = center[0] - shape.width * shape.anchorX;
				const y = center[1] - shape.height * shape.anchorY;

				return (
					<div
						className="absolute pointer-events-none"
						style={{
							left: `${x}px`,
							top: `${y}px`,
						}}
					>
						<Dialog variant={dialog} title={title} text={text} />
					</div>
				);
			})()}

		</div>
	);
}
