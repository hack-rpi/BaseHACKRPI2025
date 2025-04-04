"use client";

import Footer from "@/components/footer/footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<main>{children}</main>
			<Footer />
		</>
	);
}
