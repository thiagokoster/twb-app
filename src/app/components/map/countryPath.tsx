"use client"

import { CountryInfo } from "@/app/constants";

export const CountryPath = ({ 
	code,
	d,
	onEnter,
	onLeave
}: { 
		code: string,
		d: string,
		onEnter?: (code: string) => void;
		onLeave?: () => void;
	}) => {
	const isActive = code in CountryInfo;
	const color = isActive ? "active" : "inactive";
	const strokeColor = "white"

	const fillClass = {
		active: "fill-[var(--color-map-active)]",
		inactive: "fill-[var(--color-map-inactive)]"
	}[color];

	return  (
		<path 
			className={`${code} ${fillClass}`}
			stroke={strokeColor}
			strokeWidth=".382"
			d={d}
			onMouseEnter={() => isActive && onEnter?.(code)}
			onMouseLeave={() => isActive && onLeave?.()}
		/>
	);
}
