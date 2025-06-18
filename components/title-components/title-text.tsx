import { useState, useEffect } from "react";
import RegistrationButton from "@/components/themed-components/registration-link";
import HackRPILink from "@/components/themed-components/hackrpi-link";
import MlhBanner from "../mlh-banner/mlh-banner";

export default function TitleText() {
	const [year, setYear] = useState(1824);

	// This kinda works, we may want to add a delay before this starts counting
	// We may also want to make the count ease in and out
	const [showHighlightDot, setShowHighlightDot] = useState(false);

	useEffect(() => {
		const scrollThreshold = window.innerWidth > 860 ? window.innerHeight - 110 : window.innerHeight - 370;
		setShowHighlightDot(window.scrollY > scrollThreshold);

		const handleResize = () => {
			setShowHighlightDot(window.scrollY > scrollThreshold);
		};

		window.addEventListener("resize", handleResize);
		window.addEventListener("scroll", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", handleResize);
		};
	}, []);

	return (
		<div className="w-full font-sans  text-left flex items-start justify-center flex-col mb-8">
			<h1 className="w-full text-5xl 2xs:text-7xl sm:text-8xl 2xl:text-9xl font-bold font-neutral">HACKRPI</h1>
			<h2>
				<span className="w-full text-4xl sm:text-[3.5rem] 2xl:text-7xl whitespace-nowrap h-14 2xl:h-20 font-retro">
					Retro{" "}
				</span>
				<span className="w-full text-4xl sm:text-[3.5rem] 2xl:text-7xl whitespace-nowrap h-14 2xl:h-20 font-neutral font-bold">
					V.{" "}
				</span>
				<span className="w-full text-4xl sm:text-[3.5rem] 2xl:text-7xl whitespace-nowrap h-14 2xl:h-20 font-modern">
					Modern
				</span>
			</h2>
			<p className={`w-full text-3xl sm:text-4xl 2xl:text-5xl mb-8`}>
				November 15-16, 2025
			</p>
			<RegistrationButton className="text-3xl font-modern" name="Register today!" />
			<HackRPILink			
				href="https://2024.hackrpi.com/"
				className={`text-3xl pl-2 pr-5 py-2 font-pix`}
				target="_blank"
				>
				Hackrpi 2024 website
			</HackRPILink>
      <MlhBanner />
		</div>
	);
}
