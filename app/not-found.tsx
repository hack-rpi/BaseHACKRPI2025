"use client";

import Footer from "@/components/footer/footer";
import "../app/globals.css";
import HackRPILink from "@/components/themed-components/hackrpi-link";

export default function Custom404() {
	return (
		<div className="flex flex-col items-start desktop:items-center justify-start">
			<div className="error-message text-center mt-40">
				<h1 className="text-4xl font-bold text-white">ERROR 404: No page found</h1>
				<p>Click button below to be transported back to the Home Page.</p>
			</div>
			<div className="mt-8 text-3-1 flex justify-center">
				<HackRPILink href="/" className="text-white text-3xl pl-2 pr-5 py-2 font-modern">
					Home
				</HackRPILink>
			</div>
			<div className="mt-40"></div>
			<div className="absolute bottom-0 w-full"></div>
		</div>
	);
}
