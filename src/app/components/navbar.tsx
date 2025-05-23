import Image from "next/image";
import Link from "next/link";
import { Icons } from "../icons";
export const NavBar = () => {
	return (
		<div className="px-24 py-7 bg-red-900">
			<div className="flex justify-between items-center">
				<Image src="/logo.png" alt="Logo" width={106} height={65} />
				<div className="flex gap-8 items-center">
					<Link href="/">Home</Link>
					{/* Remove link as pages are implemented
					<Link href="/about">Quem Somos</Link>
					<Link href="/projects">Projetos</Link>
					<Link href="/blog">Blog</Link>
					<Link href="/partners">Parceiros</Link>
					*/}
				</div>
				<button className="border border-2 px-4 py-2 rounded-md flex gap-1">Como Ajudar<Icons.whatsaap /></button>
			</div>
		</div>
	);
}
