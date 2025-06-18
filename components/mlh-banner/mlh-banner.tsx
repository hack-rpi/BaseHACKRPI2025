import NextImage from "next/image";

export default function MlhBanner() {
	return (
		<a
			id="mlh-trust-badge"
			href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
			target="_blank"
			className="block max-w-[80] desktop:max-w-[100px] min-w-[60px] w-[8%] h-auto fixed right-[40px] lg:right-[25px]  top-0 z-[10000] "
		>
			<NextImage
				src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
				alt="Major League Hacking 2026 Hackathon Season"
				width={100}
				height={100}
				priority={true}
			/>
		</a>
	);

  
}



//<a id="" style="display:block;max-width:100px;min-width:60px;position:fixed;right:50px;top:0;width:10%;z-index:10000" href="" target="_blank"><img src="" alt="" style="width:100%"></a>