"use client";

import TitleComponent from "@/components/title-components/title";
import { useEffect, useState } from "react";


export default function Home() {
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
		<>
			<div className="flex flex-col items-start desktop:items-center justify-start w-full">
				<div className="w-full desktop:mx-8">
					<TitleComponent />
				</div>
			</div>
		</>
	);
}
