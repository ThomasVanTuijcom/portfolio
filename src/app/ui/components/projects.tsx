'use client';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bakehaus } from "../fonts";
import ProjectCard from "./projectCard";
import Slider from "react-slick";
import { useTranslations } from "next-intl";

export default function Projects({
    id,
}: {
    id: string,
}) {
    const t = useTranslations('Projects');
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div id={id} className="flex flex-col items-center justify-center gap-20 h-[100vh]">
            <h2 className={`${bakehaus.className} text-5xl`}>{t('projectTitle')}</h2>
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