import { Carousel } from "./components/carousel";
import { NavBar } from "./components/navbar";

export default function Home() {
	return (
		<main className="min-h-svh bg-white">
			<div className="bg-slate-500">
				<NavBar />
				<Carousel />

				
			</div>
		</main>
	);
}
