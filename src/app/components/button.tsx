import { ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
	square?: boolean;
	onClick?: () => void;
};

export const Button = ({ children, square = false, onClick} : ButtonProps) => {
	const baseClasses = "rounded bg-twb-green text-twb-grey-dark";
	const shapeClasses = square ? "w-12 h-12 flex items-center justify-center" : "px-4 py-2";

	const className = `${baseClasses} ${shapeClasses}`;
	return (
	<button className={className} onClick={onClick}>{children}</button> 
	);
}
