import { NavBar } from "./components/navbar";
import { Icons } from "./icons";

export default function Home() {
	return (
		<main className="min-h-svh bg-white">
			<div className="bg-slate-500">
				<NavBar />
				<div className="px-24 py-42">
					<div className="flex flex-col gap-8">
						<div className="text-[64px]">
							Educação que liberta,<br/>
							e <span className="text-twb-green">transforma vidas</span>
						</div>
						<button className="bg-twb-primary w-fit px-4 py-4 rounded-md flex gap-1">Como Ajudar<Icons.whatsaap /></button>
					</div>
				</div>
			</div>
		</main>
	);
}
