import HackRPILink from "./hackrpi-link";

export default function RegistrationLink({ className, name}: { className?: string; name: string}) {
	return (
		<HackRPILink
			
			href="https://hackrpi2024.devpost.com/project-gallery"
			className={`${className} pl-2 pr-5 py-2`}
			target="_blank"
		>
			{name}
		</HackRPILink>
	);
}
