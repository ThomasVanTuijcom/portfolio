import Image from "next/image";
import Glassdiv from "./glass-div";
import { useTranslations } from "next-intl";

export default function ProjectCard({
	title,
	img,
	target,
}: {
	title: string;
	img: string;
	target: string;
}) {
	const t = useTranslations("Projects");
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
				<h3 className="text-[18px] font-extrabold md:text-[22px]">{title}</h3>
				<a
					href={target}
					target="_blank"
					rel="noopener noreferrer"
					className="flex cursor-pointer gap-2 text-[var(--text-secondary)] z-1 hover:underline"
				>
					{t("githubRedirectLbl")}
					<Image
						src="/new-tab.png"
						alt="New Tab Icon"
						width={20}
						height={20}
						className="object-contain"
					/>
				</a>
			</div>
		</Glassdiv>
	);
}
