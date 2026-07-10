import Badge from "@/components/Badge";
import Section from "@/components/Section";

const ContactSection = () => {
	return (
		<Section className="row-start-2 row-span-3">
			<h1 className="text-text text-xl/6 font-bold">
				Let's start working together!
			</h1>

			<h2 className="text-text text-lg mt-4">Contact Details</h2>

			<a data-cursor="shrink" href="mailto:radoslaw.kaczmarczyk@proton.me">
				<Badge
					text="radoslaw.kaczmarczyk@proton.me"
					className="py-1 hover:bg-highlight hover:text-text"
				/>
			</a>

			<h2 className="text-text text-lg mt-4">Socials</h2>

			<span className="flex flex-col gap-2">
				<a data-cursor="shrink" href="https://github.com/radeqq007" target="_blank">
					<Badge
						text="GitHub"
						className="py-1 hover:bg-highlight hover:text-text"
					/>
				</a>
				<a data-cursor="shrink" href="https://www.instagram.com/your.iron.lung/" target="_blank">
					<Badge
						text="Instagram"
						className="py-1 hover:bg-highlight hover:text-text"
					/>
				</a>
				<a data-cursor="shrink" href="https://x.com/wcale_nie_radek" target="_blank">
					<Badge
						text="X / Twitter"
						className="py-1 hover:bg-highlight hover:text-text"
					/>
				</a>
			</span>
		</Section>
	);
};

export default ContactSection;
