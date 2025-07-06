"use client"

import { CountryPath } from "./countryPath";
import { Countries } from "./countries";
import { CountryPin } from "./countryPin";

const countryInfo = {
	BR: { text: "TODO: change it", center: [342, 213] },
	SN: { text: "TODO: change it", center: [501, 112] },
	MZ: { text: "TODO: change it", center: [787, 270] },
	MG: { text: "TODO: change it", center: [837, 308] },
};

export const Map = () => {
//	const [hoveredCountry, setHoveredCountry] = useState<string>();
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="902" height="569" fill="none" viewBox="0 0 902 569">
			<g className="Map">
				{Object.entries(Countries).map(([code, { d }]) => (
					<CountryPath 
						key={code}
						code={code}
					    d={d}
					/>
				))}

				{Object.entries(countryInfo).map(([code, { center }]) =>
					center ? <CountryPin key={code} x={center[0]} y={center[1]} /> : null
				)}
			</g>
		</svg>
	);
}
