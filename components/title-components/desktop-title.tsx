"use client";

import Timer from "./timer";
import TitleText from "./title-text";
import logo from "@/public/HackRPI_Logo_Yellow_Arrow.png";
import NextImg from "next/image";

export default function DesktopTitleComponent() {
	return (
		<div className="pl-8 pt-4 flex w-full h-screen justify-around items-center mb-8">
			<div className="flex flex-col w-1/2 items-start justify-around h-full ">
				<TitleText />
				<Timer />
			</div>
			<div className="flex items-center justify-center w-1/2 h-full ">
				<NextImg alt="HackRPI Logo" aria-label="Home Page" src={logo} className="h-full object-contain" />
			</div>
		</div>
	);
}
