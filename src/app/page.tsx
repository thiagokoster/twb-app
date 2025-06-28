import { Carousel } from "./components/carousel";
import { NavBar } from "./components/navbar";
import { BlobImage } from "./components/shapes";

export default function Home() {
	return (
		<main className="min-h-svh bg-white">
			<div> 
				<NavBar />
				<Carousel />
				
				<BlobImage imagePath="https://www.humblecc.com/wp-content/uploads/2020/01/placeholder-image.png" shapeKey="shape1" width={630} height={669} />
			</div>
		</main>
	);
}
