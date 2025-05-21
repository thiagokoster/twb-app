'use client';

import { LINKS } from "../constants";
import { Icons } from "../icons";
import Image from "next/image";
import { Input } from "./input";
import { Button } from "./button";

export const Footer = () => {
	return (
		<footer className="bg-twb-primary-dark flex flex-col">
			<div className="flex px-24 py-20 justify-between gap-25">
				{/* Section 1: Newsletter */}
				<div className="max-w-lg flex flex-col gap-7">
					<div>
						<h5 className="text-2xl mb-4">Assine para receber novidades</h5>
						<p>Assine gratuitamente e receba notícias, histórias inspiradoras e muito mais direto no seu e-mail</p>
					</div>
					<div className="flex gap-4">
						{/* TODO: Change Input and Button to own components */}
						<Input />
						<Button onClick={signNewsletter}>Assinar</Button>
					</div>
					<div className="text-sm font-normal leading-[150%]">
						Ao se inscrever, você concorda com nossa Política de Privacidade e consente em receber atualizações da nossa empresa
					</div>
				</div>
				{/* Section 2: Socials  + Contact */}
				<div className="flex gap-12">
					<div>
						<h5 className="text-2xl mb-4">Siga-nos</h5>
						<div className="flex flex-col gap-3">
							<a href={LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer">
								<div className="flex gap-3"><Icons.instagram />Instagram</div>
							</a>
							<a href={LINKS.YOUTUBE} target="_blank" rel="noopener noreferrer">
								<div className="flex gap-3"><Icons.youtube />YouTube</div>
							</a>
							<a href={LINKS.FACEBOOK} target="_blank" rel="noopener noreferrer">
								<div className="flex gap-3"><Icons.facebook />Facebook</div>
							</a>
						</div>
					</div>
					<div>
						<h5 className="text-2xl mb-4">Fale conosco</h5>
						<div className="flex gap-3"><Icons.email /><a>E-mail</a></div>
					</div>
				</div>

				{/* Section 3: Button and logo */}
				<div className="grow-1 flex flex-col justify-between items-end">
					<Button square={true} onClick={scrollToTop}><Icons.chevronUp /></Button>
					<Image src="/logo.png" alt="Logo" width={106} height={65} />
				</div>
			</div>
			<div className="flex text-sm justify-between py-4 px-24 border-t border-twb-grey-light">
				<span>©2024 Teaching Without Borders - Todos os Direitos reservados</span>
				{/* TODO: Put as a link for the UXpand LinkedIn */}
				<a href={LINKS.UXPAND_LINKEDIN} target="_blank" rel="noopener noreferrer">
					Made by UXpand
				</a>
			</div>
		</footer>
	);
}

function scrollToTop() {
	window.scrollTo({top: 0, behavior: "smooth"});
}

function signNewsletter() {
	alert("To be implemented");
}


