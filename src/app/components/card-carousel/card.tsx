import Image from "next/image";

export const StoryCarousel = () => {
  // Example cards
  const cards = [
    { year: 2018, title: "Iniciou as aulas", description: "Iniciou as aulas via Skype com a professora Fernanda. O conhecimento adquirido nas aulas era  compartilhado com jovens do centro da FSF na aldeia de Muzumuia, Moçambique." , imagePath: "/carousel/2018.png"},
    { year: 2019, title: "Passou três meses no Brasil", description: "Onde estudou inglês e português, preparando-se para o vestibular de Moçambique.", imagePath: "/carousel/2019.png"},
    { year: 2020, title: "Ingressou na universidade", description: "Ingressou na Universidade Púnguè de Chimoio no curso de Licenciatura em Língua Inglesa.", imagePath: "/carousel/2020.png"},
    { year: 2023, title: "Bolsa em Londres", description: "Recebeu uma bolsa de estudos para aperfeiçoamento de inglês em Londres, Inglaterra, com duração de três meses, apoiado pela FSF do Reino Unido.", imagePath: "/carousel/2023.png"},
    { year: 2024, title: "Se tornou professor ", description: "Enoque, no último ano da faculdade, é voluntário do Teaching without Borders, dando aulas online aos sábados para jovens da Fraternidade Sem Fronteiras.", imagePath: "/carousel/2024.png"},
    { year: 2025, title: "Essa historia continua...", description: "Foi com amor e dedicação que essa história mudou. E a próxima pode começar com você. Quando alguém doa tempo, o mundo ganha futuro.", imagePath: "/carousel/2025.png"},
  ];

	


  return (
    <div className="relative w-full overflow-x-auto py-20">
			{/* line background */}
			<div className="absolute top-1/2 h-[4px]">
				<svg xmlns="http://www.w3.org/2000/svg" width="3112" height="65" fill="none" viewBox="0 0 3112 65">
					<path stroke="#D31346" strokeLinecap="round" strokeWidth="8" d="M4.11 22.038a153.538 153.538 0 0 0 106.218 27.014l47.624-5.545L270.059 17.62a500.002 500.002 0 0 1 192.471-6.385l41.426 6.712a360.952 360.952 0 0 1 49.726 11.729C588.274 40.469 624.432 46 660.669 46c23.497 0 46.938-2.309 69.983-6.893l106.061-21.096a500.008 500.008 0 0 1 224.467 6.77l29.82 7.826a499.973 499.973 0 0 0 179.45 13.61l189.11-19.98a500.063 500.063 0 0 1 149.86 6.796l66.05 13.108a499.998 499.998 0 0 0 97.33 9.562l115.77-.001c24.93 0 49.83-1.866 74.49-5.582l150.82-22.726A243.724 243.724 0 0 1 2232.24 38.9l28.56 10.212a176.668 176.668 0 0 0 145.14-11.849 176.652 176.652 0 0 1 85.66-22.16h16.06l351.62 42.128a500.008 500.008 0 0 0 138.21-2.686l110.02-17.542" />
				</svg>

			</div>

      {/* Cards */}
      <div className="flex items-center relative z-10">
        {cards.map((card, i) => (
          <CarouselCard key={i} {...card} />
        ))}
      </div>
    </div>
  );
};

interface CarouselCardProps {
  imagePath: string;
  year: number;
  title: string;
  description: string;
}

export const CarouselCard = ({
  imagePath,
  year,
  title,
  description,
}: CarouselCardProps) => {
  return (
		<div className="flex items-center">
			<div className="text-black text-xl font-semibold text-center w-[176px]">
				{year}
			</div>
			<div className="relative w-[368px] h-[399px] rounded-xl overflow-hidden shadow-lg">
				{/* Background Image */}
				<Image
					src={imagePath}
					alt={title}
					fill
					className="object-cover"
				/>

				{/* Overlay with blur */}
				<div className="absolute bottom-0 w-full h-[44%] py-4 px-7 backdrop-blur-sm text-twb-grey-light flex flex-col gap-1">
					<h3 className="text-xl font-semibold">{title}</h3>
					<p className="text-sm font-normal">{description}</p>
				</div>
			</div>
		</div>
  );
};

