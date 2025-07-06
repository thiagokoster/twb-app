"use client"

import { CountryInfo } from "@/app/constants";

export const CountryPath = ({ code, d }: { code: string, d: string }) => {
	const isActive = code in CountryInfo;
	const activeColor = "#F18322";
	const inactiveColor = "#CCCCCC"
	const strokeColor = "white"

	const handleMouseEnter = () => {
		if (isActive) {
			console.log(`Hovered country: ${code}`);
		}
	};

	return  (
		<path 
			className={code}
			fill={isActive ? activeColor : inactiveColor}
			stroke={strokeColor}
			strokeWidth=".382"
			d={d}
			onMouseEnter={handleMouseEnter}
		/>
	);
}
