import React from "react";
import { HeartBullet } from "./heartBullet";
type ListItemProps = {
	title: string;
	description: React.ReactNode;
};

export const ListItem = ({title, description }: ListItemProps) => {
	return (
	<div className="flex gap-6">
			<div className="shrink-0">
				<HeartBullet />
			</div>
			<div className="flex flex-col gap-2">
				<p className="text-twb-dark">{title}</p>
				<p className="text-white-darker font-normal">{description}</p>
			</div>
	</div>
	);
}
