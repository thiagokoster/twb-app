import { Carousel } from "./components/carousel";
import { NavBar } from "./components/navbar";
import { BlobImage } from "./components/shapes";
import { Map } from "./components/map";

export default function Home() {
	return (
		<main className="min-h-svh bg-white">
			<div> 
				<NavBar />
				<Carousel />
				
				<BlobImage imagePath="image1.png" shapeKey="shape1" width={630} height={669} />
				<Map />
			</div>
		</main>
	);
}
