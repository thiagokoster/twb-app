import { ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
	square?: boolean;
	variant?: "primary" | "secondary";
	onClick?: () => void;
	className?: string;
};

export const Button = ({ children, variant = "primary", square = false, onClick, className = ""} : ButtonProps) => {
	const base = "inline-flex items-center justify-center rounded font-semibold";
  	const size = square ? "w-12 h-12" : "px-4 py-2";
	const variants = {
    primary: "bg-twb-green text-twb-grey-dark",
    secondary: "border-2 border-twb-primary text-twb-primary bg-transparent",
  } as const;

	const classes = [base, size, variants[variant], className].join(" ");
	return (
	<button className={classes} onClick={onClick}>{children}</button> 
	);
}
