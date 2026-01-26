"use client";

import { useTranslations } from "next-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { bakehaus } from "../fonts";
import ProjectCard from "./project-card";
import { CustomArrowProps } from "react-slick";

import dynamic from "next/dynamic";

const ProjectsSlider = dynamic(() => import("./projects-slider"), {
	ssr: false,
});

function NextArrow({ onClick }: CustomArrowProps) {
	return (
		<div
			className="absolute top-1/2 right-[-4px] -translate-y-1/2 transform cursor-pointer transition-transform duration-200 ease-in-out hover:scale-120 md:right-[-20px] lg:right-[-30px]"
			onClick={onClick}
		>
			<div className="h-5 w-5 rotate-45 border-t-2 border-r-2 border-[var(--arrow-color)]" />
		</div>
	);
}

function PrevArrow({ onClick }: CustomArrowProps) {
	return (
		<div
			className="absolute top-1/2 left-[-4px] -translate-y-1/2 transform cursor-pointer transition-transform duration-200 ease-in-out hover:scale-120 md:left-[-20px] lg:left-[-30px]"
			onClick={onClick}
		>
			<div className="h-5 w-5 -rotate-45 border-t-2 border-l-2 border-[var(--arrow-color)]" />
		</div>
	);
}

export default function Projects({ id }: { id: string }) {
	const t = useTranslations("Projects");
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: { slidesToShow: 2 },
			},
			{
				breakpoint: 640,
				settings: { slidesToShow: 1 },
			},
		],
	};

	return (
		<div
			id={id}
			className="flex h-[100vh] flex-col items-center justify-center gap-20"
		>
			<h2
				className={`${bakehaus.className} text-5xl text-[var(--text-secondary)]`}
			>
				{t("projectTitle")}
			</h2>
			<div className="w-full max-w-[300px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-[900px]">
				<ProjectsSlider  {...settings}>
					<ProjectCard
						title="Minishell"
						img="/projects/bash.png"
						target="https://github.com/ThomasVanTuijcom/minishell"
					/>
					<ProjectCard
						title="Pipex"
						img="/projects/pipex.webp"
						target="https://github.com/ThomasVanTuijcom/pipex"
					/>
					<ProjectCard
						title="Boulderdash"
						img="/projects/boulderdash.png"
						target="https://github.com/ThomasVanTuijcom/boulderdash"
					/>
					<ProjectCard
						title="SNCB"
						img="/projects/stib.jpg"
						target="https://github.com/ThomasVanTuijcom/stibRide"
					/>
					<ProjectCard
						title="Baba Is You"
						img="/projects/babaisyou.jpg"
						target="https://github.com/ThomasVanTuijcom/babaIsYou"
					/>
				</ProjectsSlider>
			</div>
		</div>
	);
}
