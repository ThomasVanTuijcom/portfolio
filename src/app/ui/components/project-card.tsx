import { karla } from "../fonts";
import Glassdiv from "./glass-div";
import Image from "next/image";

export default function ProjectCard({
	title,
	img,
}: {
	title: string;
	img: string;
}) {
	return (
		<Glassdiv className="mx-5 my-3 transform rounded-4xl px-10 py-10 transition-transform duration-500 ease-in-out hover:scale-105">
			<div className="flex flex-col items-center">
				<div className="relative aspect-square w-full overflow-hidden rounded-2xl">
					<Image
						src={img}
						fill
						alt="Project screenshot"
						className="object-cover"
					/>
				</div>
				<h3 className="text-[22px] font-extrabold">{title}</h3>
			</div>
		</Glassdiv>
	);
}
