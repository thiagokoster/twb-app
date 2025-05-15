import { LINKS } from "../constants";
import { Icons } from "../icons";
import Image from "next/image";

export const Footer = () => {
	return (
		<footer className="bg-twb-primary-dark flex flex-col">
			<div className="flex px-24 py-20 justify-between gap-25">
				{/* Section 1: Newsletter */}
				<div className="max-w-md">
					<h5 className="text-2xl">Assine para receber novidades</h5>
					<p>Assine gratuitamente e receba notícias, histórias inspiradoras e muito mais direto no seu e-mail</p>
					<div>
						{/* TODO: Change Input and Button to own components */}
						<input/>
						<button color="green">Assinar</button>
					</div>
					<div className="text-sm font-normal leading-[150%]">
						Ao se inscrever, você concorda com nossa Política de Privacidade e consente em receber atualizações da nossa empresa
					</div>
				</div>
				{/* Section 2: Socials  + Contact */}
				<div className="flex gap-12">
					<div>
						<h5 className="text-2xl">Siga-nos</h5>
						<div className="flex flex-col gap-5">
							<a href={LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer">
								<div className="flex gap-1"><Icons.instagram />Instagram</div>
							</a>
							<a href={LINKS.YOUTUBE} target="_blank" rel="noopener noreferrer">
								<div className="flex gap-1"><Icons.youtube />YouTube</div>
							</a>
							<a href={LINKS.FACEBOOK} target="_blank" rel="noopener noreferrer">
								<div className="flex gap-1"><Icons.facebook />Facebook</div>
							</a>
						</div>
					</div>
					<div>
						<h5 className="text-2xl">Fale conosco</h5>
						<div className="flex gap-1"><Icons.email /><a>E-mail</a></div>
					</div>
				</div>

				{/* Section 3: Button and logo */}
				<div className="grow-1 flex flex-col justify-between items-end">
					<button className="bg-green-500">UP</button>
					<Image src="/logo.png" alt="Logo" width={106} height={65} />
				</div>
			</div>
			<div className="flex justify-between py-5 px-24 border-t border-twb-grey-light">
				<span>©2024 Teaching Without Borders - Todos os Direitos reservados</span>
				{/* TODO: Put as a link for the UXpand LinkedIn */}
				<a href={LINKS.UXPAND_LINKEDIN} target="_blank" rel="noopener noreferrer">
					Made by UXpand
				</a>
			</div>
		</footer>
	);
}
