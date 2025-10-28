"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bakehaus } from "../fonts";
import ProjectCard from "./project-card";
import Slider from "react-slick";
import { useTranslations } from "next-intl";

function NextArrow(props: any) {
	const { onClick } = props;
	return (
		<div
			className="absolute top-1/2 right-[-40px] -translate-y-1/2 transform cursor-pointer transition-transform duration-200 ease-in-out hover:scale-120"
			onClick={onClick}
		>
			<div className="h-5 w-5 rotate-45 border-t-2 border-r-2 border-[var(--arrow-color)]" />
		</div>
	);
}

function PrevArrow(props: any) {
	const { onClick } = props;
	return (
		<div
			className="absolute top-1/2 left-[-40px] -translate-y-1/2 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-120"
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
			<h2 className={`${bakehaus.className} text-[var(--text-secondary)] text-5xl`}>{t("projectTitle")}</h2>
			<div className="w-3/5">
				<Slider {...settings}>
					<ProjectCard title="Minishell" img="/projects/bash.png" />
					<ProjectCard title="Boulderdash" img="/projects/bash.png" />
					<ProjectCard title="SNCB" img="/projects/bash.png" />
					<ProjectCard title="Another Project" img="/projects/bash.png" />
				</Slider>
			</div>
		</div>
	);
}
