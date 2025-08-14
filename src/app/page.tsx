import { Carousel } from "./components/carousel";
import { NavBar } from "./components/navbar";
import { BlobImage } from "./components/shapes";
import { Map } from "./components/map/map";
import { Exclamation } from "./components/drawings";
import { ListItem } from "./components/list/listItem";
import { Button } from "./components/button";

export default function Home() {
	return (
		<main className="min-h-svh bg-white">
			<div> 
				<NavBar />
				<Carousel />

				<div className="flex flex-row px-20 py-20 justify-center gap-20">
					<BlobImage imagePath="image1.png" shapeKey="shape1" width={503} height={534} />
					<div className="flex flex-col gap-8 justify-center">
						<div className="flex flex-col gap-4">
							{/* Section Title */}
							<div className="flex flex-row">
								<div className="mr-8">
									<p className="font-trash text-twb-primary text-3xl">QUEM SOMOS</p>
									<p className="text-twb-dark text-5xl">Nosso Propósito</p>
								</div>
								<Exclamation />
							</div>
							{/* Section Description */}
							<p className="text-white-darker font-normal">Queremos romper barreiras na educação e levar oportunidades de aprendizado aonde o acesso ao conhecimento é limitado. Ao compartilhar saberes, fortalecemos pessoas para que se tornem agentes de mudança em suas comunidades e no mundo.</p>
						</div>
						{/* Section Cards and Button*/}
						<div className="flex flex-col gap-8">
							<div className="flex flex-col gap-6">
								<ListItem title="Construir um mundo mais fraterno" description={
									<>
										Somos guiados pelos valores do <strong>Fraternidade sem Fronteiras</strong>: fraternidade, fidelidade ao propósito, valorização do ser, espiritualidade e sustentabilidade. <a href="/quemsomos" className="text-twb-primary font-bold">Saiba mais.</a>
									</>
								}/>
								<ListItem title="Unir corações e valorizar vidas" description="Conectamos corações e mentes para criar um impacto duradouro e transformar realidades nas comunidades carentes."/>
								<ListItem title="Promover educação sustentável e inclusiva" description="Construímos um futuro mais inclusivo e sustentável com uma educação que transcende fronteiras e impacta vidas."/>
							</div>
							<Button variant="secondary" className="self-start">Como ajudar</Button>
						</div>
					</div>
				</div>
				<Map />
			</div>
		</main>
	);
}
