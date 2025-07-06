import { DialogVariant } from "./components/map/dialog";

export const LINKS = {
	INSTAGRAM: "https://www.instagram.com/teachingwithoutborders_",
	FACEBOOK: "https://www.facebook.com/people/Teaching-Without-Borders/61557466714554/",
	YOUTUBE: "https://www.youtube.com/@teachingwithoutborders2522",
	EMAIL: "twb.teachingwithoutborders@gmail.com", // TODO: Maybe we should offer to setup an email for them with their domain
	UXPAND_LINKEDIN: "https://www.linkedin.com/company/uxpand-collective/"
} as const;


export const CountryInfo: Record<string, { title: string; text: string; center: [number, number], dialog: DialogVariant }> = {
  BR: {
		title: "Teaching in Clinica da Alma, Brasil",
		text: "Em parceria com a “Clínica da Alma”, ofertamos aulas de inglês on-line para pessoas em reabilitação e seus filhos.",
		center: [342, 213],
		dialog: "right" 
	},
  SN: {
		title: "Teaching in Senegal",
		text: "Aulas remotas de inglês para crianças do orfanato Chemin du Futur.",
		center: [501, 112],
		dialog: "left" 
	},
  MZ: {
		title: "Teaching in Mozambique",
		text: "Em colaboração com professores locais, oferecemos aulas de inglês online e presenciais para jovens no ‘Projeto de Jovem em Muzumuia’.",
		center: [787, 270],
		dialog: "right" 
	},
  MG: {
		title: "Teaching in Madagascar",
		text: "Começamos nosso trabalho com universitários e, hoje, expandimos nossa missão ao oferecer aulas de inglês para crianças na Escola Horova, levando educação e esperança para diferentes gerações.",
		center: [837, 308],
		dialog: "down" 
	},
};
