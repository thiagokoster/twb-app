export const SHAPES: Record<string, string> = {
	shape1: "M298.53 32.0611C365.823 36.3369 436.798 8.08503 495.664 40.9695C557.324 75.4151 594.39 141.908 615.704 209.245C636.9 276.21 631.859 346.871 613.989 414.8C595.175 486.317 569.148 559.108 511.485 605.409C452.339 652.901 374.176 673.715 298.53 668.103C226.135 662.731 159.803 625.619 107.359 575.424C59.64 529.752 39.2677 465.953 20.9975 402.477C3.36031 341.2 -5.86991 279.614 4.08913 216.631C15.6458 143.546 19.6195 54.0049 82.3137 14.705C145.113 -24.6608 224.561 27.3611 298.53 32.0611Z"
};

interface BlobImageProps {
	imagePath: string,
	shapeKey: keyof typeof SHAPES;
	width: number
	height: number
}

export const BlobImage: React.FC<BlobImageProps> = ({ imagePath, shapeKey, width, height }) => {
	const path = SHAPES[shapeKey];

	return(
		<svg 
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg" 
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<defs>
				<clipPath id={`clip-${shapeKey}`}>
					<path d={path} transform="scale(1)" />
				</clipPath>
			</defs>

			<image
				href={imagePath}
				clipPath={`url(#clip-${shapeKey})`}
				x="0" y="0"
				width={width} height={height}
				preserveAspectRatio="xMidYMid slice"
			/>
		</svg>
	);
};
